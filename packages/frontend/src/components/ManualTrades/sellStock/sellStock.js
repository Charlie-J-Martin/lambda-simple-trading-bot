import { sellStockWithLambda } from './sellStockLambda';

const convertToLowestDenomination = (amount) => {
  return Math.round(amount * 100);
};

export const sellStock = async (cash, stockInput, stockPrice, stock) => {
  const stockPriceInCents = convertToLowestDenomination(stockPrice);
  const response = await sellStockWithLambda(stockInput, stockPriceInCents);

  const cashInCents = convertToLowestDenomination(cash);
  const remainingCash = cashInCents + response[1];
  const remainingCashInDollars = remainingCash / 100;

  const remainingStocks = stock - stockInput;
  return [remainingStocks, remainingCashInDollars];
};
