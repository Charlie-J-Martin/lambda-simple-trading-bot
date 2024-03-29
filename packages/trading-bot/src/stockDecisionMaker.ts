import { socket } from '../../socket-client/src/socketClient';
import { meanReversion } from '../../trading-strategies/src/mean-reversion/mean-reversion';
import { buyStock } from './buyStock';
import { sellStock } from './sellStock';

export type StockResult = {
  v: number; // Volume
  vw: number; // Volume Weighted Average Price
  o: number; // Open Price
  c: number; // Close Price
  h: number; // High Price
  l: number; // Low Price
  t: number; // Timestamp (Unix Epoch Time)
  n: number; // Number of trades
};

export const convertToLowestDenomination = (cash: number) => {
  return cash * 100;
};

export const stockDecisionMaker = (initialCash: number) => {
  console.log('Trading Bot is running...');
  let previousClose: number | undefined = undefined;
  let currentOpen: number | undefined = undefined;
  const thresholdPercent = 0.05;
  let sellCount = 0;
  let buyCount = 0;
  let holdCount = 0;
  let numberOfStocks = 0;

  let cash = convertToLowestDenomination(initialCash); // 100000

  socket.on('AAPL', (message: StockResult) => {
    // if the previous message is not null, then we can make a decision
    if (previousClose !== undefined && message.o !== undefined) {
      currentOpen = message.o;
      const decision = meanReversion(
        previousClose,
        currentOpen,
        thresholdPercent
      );
      if (decision === 'Buy') {
        if (cash !== 0) {
          console.log('Buying Stock...');
          [numberOfStocks, cash] = buyStock(cash, currentOpen);
          buyCount++;
        }
      } else if (decision === 'Sell') {
        if (numberOfStocks !== 0) {
          console.log('Selling Stock...');
          [numberOfStocks, cash] = sellStock(numberOfStocks, currentOpen);
          sellCount++;
        }
      } else if (decision === 'Hold') {
        holdCount++;
      }
      console.log(
        `Buy Count: ${buyCount}, Sell Count: ${sellCount}, Hold Count: ${holdCount}`
      );
      console.log(
        `Cash Available After Transaction: ${cash}, Number Of Stocks Held After Transaction: ${numberOfStocks}`
      );
    }
    previousClose = message.c;
  });
};
