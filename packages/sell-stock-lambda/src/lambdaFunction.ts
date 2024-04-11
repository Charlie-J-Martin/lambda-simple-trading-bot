import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, _context) => {
  try {
    if (
      !event.stocks ||
      !event.price ||
      typeof event.stocks !== 'number' ||
      typeof event.price !== 'number'
    ) {
      throw new Error('Invalid input: stocks and price must be numbers');
    }

    const { stocks, price } = event;
    const totalSale = Number((stocks * price).toFixed(5));
    const cash = Number(totalSale.toFixed(0));
    return {
      statusCode: 200,
      body: JSON.stringify({ stocks: 0, cash }),
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
