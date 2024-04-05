import { logger } from '../../pino/src/logger';
import { InvestmentStatus, TradeDecisionCounts } from '../../types/types';

export const collectStatistics = (
  tradeDecisionCounts: TradeDecisionCounts,
  investmentStatus: InvestmentStatus
) => {
  const totalProfitLoss =
    (investmentStatus.cash - investmentStatus.initialCash) / 100;

  const totalProfitLossPercentage =
    (totalProfitLoss / investmentStatus.initialCash) * 100;

  const totalTrades =
    tradeDecisionCounts.buyCount + tradeDecisionCounts.sellCount;

  const buyTrades = tradeDecisionCounts.buyCount;
  const sellTrades = tradeDecisionCounts.sellCount;
  const holdTrades = tradeDecisionCounts.holdCount;

  const buyTradesPercentage = (buyTrades / totalTrades) * 100;
  const sellTradesPercentage = (sellTrades / totalTrades) * 100;
  const holdTradesPercentage = (holdTrades / totalTrades) * 100;

  const currentCash = investmentStatus.cash / 100;
  const currentStocks = investmentStatus.numberOfStocks;

  logger.info('Statistics:');
  logger.info(`Total Profit/Loss: $${totalProfitLoss}`);
  logger.info(`Total Profit/Loss Percentage: ${totalProfitLossPercentage}%`);
  logger.info(`Total Trades: ${totalTrades}`);
  logger.info(`Buy Trades: ${buyTrades} (${buyTradesPercentage}%)`);
  logger.info(`Sell Trades: ${sellTrades} (${sellTradesPercentage}%)`);
  logger.info(`Hold Trades: ${holdTrades} (${holdTradesPercentage}%)`);
  logger.info(`Current Cash: $${currentCash}`);
  logger.info(`Current Stocks: ${currentStocks}`);
};
