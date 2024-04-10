import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, _context) => {
  try {
    if (
      !event.cash ||
      !event.price ||
      typeof event.cash !== 'number' ||
      typeof event.price !== 'number'
    ) {
      throw new Error('Invalid input: cash and price must be numbers');
    }

    const { cash, price } = event;
    const numberOfStocks = Number((cash / price).toFixed(5));
    const totalCost = numberOfStocks * price;
    const remainingCash = Number((cash - totalCost).toFixed(0));
    return {
      statusCode: 200,
      body: JSON.stringify({ numberOfStocks, remainingCash }),
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: 'An error occurred',
          error: error.message,
          event: event,
        }),
      };
    }
  }
};
