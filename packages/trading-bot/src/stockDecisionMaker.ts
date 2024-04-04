import { socket } from '../../socket-client/src/socketClient';
import { meanReversion } from '../../trading-strategies/src/mean-reversion/mean-reversion';
import { StockResult } from '../../types/types';
import { convertToLowestDenomination } from '../../utils/src/convertToLowestDenomination';
import { buyStock } from './buyStock';
import { sellStock } from './sellStock';
import { logger } from '../../pino/src/logger';

export const stockDecisionMaker = (initialCash: number) => {
  logger.info('Trading Bot is running...');
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
          logger.info('Buying Stock...');
          [numberOfStocks, cash] = buyStock(cash, currentOpen);
          buyCount++;
        }
      } else if (decision === 'Sell') {
        if (numberOfStocks !== 0) {
          logger.info('Selling Stock...');
          [numberOfStocks, cash] = sellStock(numberOfStocks, currentOpen);
          sellCount++;
        }
      } else if (decision === 'Hold') {
        holdCount++;
      }
      logger.info(
        `Buy Count: ${buyCount}, Sell Count: ${sellCount}, Hold Count: ${holdCount}`
      );
      logger.info(
        `Cash Available After Transaction: ${cash}, Number Of Stocks Held After Transaction: ${numberOfStocks}`
      );
    }
    previousClose = message.c;
  });
};
