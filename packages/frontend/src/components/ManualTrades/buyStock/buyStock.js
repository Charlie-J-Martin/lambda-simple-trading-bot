import { buyStockWithLambda } from './buyStockLambda';

const convertToLowestDenomination = (amount) => {
  return Math.round(amount * 100);
};

export const buyStock = async (cash, cashInput, stockPrice, stock) => {
  const cashInputInCents = convertToLowestDenomination(cashInput);
  const stockPriceInCents = convertToLowestDenomination(stockPrice);
  const response = await buyStockWithLambda(
    cashInputInCents,
    stockPriceInCents
  );

  const cashInCents = convertToLowestDenomination(cash);
  const remainingCash = cashInCents - cashInputInCents;
  const remainingCashInDollars = remainingCash / 100;

  const allStocks = stock + response[0];
  return [remainingCashInDollars, allStocks];
};
