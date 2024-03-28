import { convertToLowestDenomination } from './stockDecisionMaker';

export const sellStock = (numberOfStocks: number, price: number) => {
  const convertedPrice = convertToLowestDenomination(price);
  const totalSale = numberOfStocks * convertedPrice;
  const cash = Number(totalSale.toFixed(0));
  console.log(`Selling ${numberOfStocks} stocks at ${price}`);
  return [0, cash];
};
