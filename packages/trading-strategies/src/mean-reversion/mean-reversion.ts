export const meanReversion = (
  previousClose: number,
  currentOpen: number,
  thresholdPercent: number
) => {
  // Calculate the threshold value as a percentage of the previous close price
  let threshold = (thresholdPercent / 100) * previousClose;

  // Calculate the price difference
  let priceDifference = currentOpen - previousClose;

  // Check if the price difference exceeds the threshold
  if (priceDifference < -threshold) {
    // Buy signal: opening price significantly lower than previous close
    return 'Buy'; // You may want to return more details such as the amount to buy
  } else if (priceDifference > threshold) {
    // Sell signal: opening price significantly higher than previous close
    return 'Sell'; // You may want to return more details such as the amount to sell
  } else {
    // No significant deviation, do nothing
    return 'Hold';
  }
};
