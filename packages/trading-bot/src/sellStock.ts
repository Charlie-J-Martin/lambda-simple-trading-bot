import { logger } from '../../pino/src/logger';
import { convertToLowestDenomination } from '../../utils/src/convertToLowestDenomination';

export const sellStock = (numberOfStocks: number, price: number) => {
  const convertedPrice = convertToLowestDenomination(price);
  const totalSale = numberOfStocks * convertedPrice;
  const cash = Number(totalSale.toFixed(0));
  logger.info(`Selling ${numberOfStocks} stocks at ${price}`);
  return [0, cash];
};
