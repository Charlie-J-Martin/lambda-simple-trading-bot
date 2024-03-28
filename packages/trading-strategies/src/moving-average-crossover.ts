// function movingAverageCrossover(closingPrices, shortPeriod, longPeriod) {
//   // Calculate short-term moving average
//   let shortMA = calculateMovingAverage(closingPrices, shortPeriod);

//   // Calculate long-term moving average
//   let longMA = calculateMovingAverage(closingPrices, longPeriod);

//   // Determine the latest index where short-term moving average crosses above long-term moving average
//   let crossoverIndex = findCrossoverIndex(shortMA, longMA);

//   // If short-term moving average crossed above long-term moving average, consider buying
//   if (crossoverIndex !== null && crossoverIndex === closingPrices.length - 1) {
//     return 'Buy';
//   }
//   // If short-term moving average crossed below long-term moving average, consider selling
//   else if (
//     crossoverIndex !== null &&
//     crossoverIndex === closingPrices.length - 1
//   ) {
//     return 'Sell';
//   } else {
//     return 'Hold'; // No crossover or not enough data for a reliable signal
//   }
// }

// // Function to calculate the moving average
// function calculateMovingAverage(data, period) {
//   let movingAverage = [];
//   for (let i = period - 1; i < data.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < period; j++) {
//       sum += data[i - j];
//     }
//     movingAverage.push(sum / period);
//   }
//   return movingAverage;
// }

// // Function to find the index where short-term moving average crosses above long-term moving average
// function findCrossoverIndex(shortMA, longMA) {
//   for (let i = 1; i < shortMA.length; i++) {
//     if (shortMA[i] > longMA[i] && shortMA[i - 1] <= longMA[i - 1]) {
//       return i;
//     }
//   }
//   return null; // No crossover found
// }
