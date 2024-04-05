import { logger } from '../../pino/src/logger';
import { socket } from '../../socket-client/src/socketClient';
import { meanReversion } from '../../trading-strategies/src/mean-reversion/mean-reversion';
import {
  InvestmentStatus,
  MarketValues,
  StockResult,
  TradeDecisionCounts,
} from '../../types/types';
import { convertToLowestDenomination } from '../../utils/src/convertToLowestDenomination';
import { buyStock } from './buyStock';
import { sellStock } from './sellStock';
import { collectStatistics } from './statistics';

export const stockDecisionMaker = (initialCash: number) => {
  const tradeDecisionCounts: TradeDecisionCounts = {
    buyCount: 0,
    sellCount: 0,
    holdCount: 0,
  };

  const investmentStatus: InvestmentStatus = {
    initialCash: convertToLowestDenomination(initialCash),
    cash: convertToLowestDenomination(initialCash),
    numberOfStocks: 0,
  };

  const marketValues: MarketValues = {
    previousClose: undefined,
    currentOpen: undefined,
  };

  const thresholdPercent = 0.05;

  socket.on('AAPL', (message: StockResult) => {
    if (marketValues.previousClose !== undefined && message.o !== undefined) {
      marketValues.currentOpen = message.o;

      const decision = meanReversion(
        marketValues.previousClose,
        marketValues.currentOpen,
        thresholdPercent
      );

      switch (decision) {
        case 'Buy':
          if (investmentStatus.cash !== 0) {
            logger.info('Buying Stock...');
            [investmentStatus.numberOfStocks, investmentStatus.cash] = buyStock(
              investmentStatus.cash,
              marketValues.currentOpen
            );
            tradeDecisionCounts.buyCount++;
          }
          break;
        case 'Sell':
          if (investmentStatus.numberOfStocks !== 0) {
            logger.info('Selling Stock...');
            [investmentStatus.numberOfStocks, investmentStatus.cash] =
              sellStock(
                investmentStatus.numberOfStocks,
                marketValues.currentOpen
              );
            tradeDecisionCounts.sellCount++;
          }
          break;
        case 'Hold':
          tradeDecisionCounts.holdCount++;
          break;
        default:
          break;
      }
    }
    marketValues.previousClose = message.c;
    collectStatistics(tradeDecisionCounts, investmentStatus);
  });
};
