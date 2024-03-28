import { convertToLowestDenomination } from './stockDecisionMaker';

export const buyStock = (cash: number, price: number) => {
  const convertedPrice = convertToLowestDenomination(price);
  const numberOfStocks = Number((cash / convertedPrice).toFixed(5));
  const totalCost = numberOfStocks * convertedPrice;
  cash = Number((cash - totalCost).toFixed(0));
  console.log(`Buying ${numberOfStocks} stocks at ${price}`);
  return [numberOfStocks, cash];
};
