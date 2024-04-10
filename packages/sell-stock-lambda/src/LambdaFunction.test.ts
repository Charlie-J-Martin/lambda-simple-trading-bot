import { handler } from './lambdaFunction';

const mockedContext = {
  callbackWaitsForEmptyEventLoop: false,
  functionName: '',
  functionVersion: '',
  invokedFunctionArn: '',
  memoryLimitInMB: '',
  awsRequestId: '',
  logGroupName: '',
  logStreamName: '',
  getRemainingTimeInMillis: jest.fn(),
  done: jest.fn(),
  fail: jest.fn(),
  succeed: jest.fn(),
};

describe('handler', () => {
  it('should calculate the total sale and cash correctly - simple', async () => {
    const event = {
      numberOfStocks: 10,
      price: 100,
    };

    const response = await handler(event, mockedContext, () => {});

    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        numberOfStocks: 0,
        cash: 1000,
      }),
    });
  });

  it('should calculate the total sale and cash correctly - complex', async () => {
    const event = {
      numberOfStocks: 48796.36598,
      price: 194,
    };

    const response = await handler(event, mockedContext, () => {});

    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        numberOfStocks: 0,
        cash: 9466495,
      }),
    });
  });

  it('should return an error if numberOfStocks or price is not a number', async () => {
    const event = {
      numberOfStocks: '10',
      price: 100,
    };

    const response = await handler(event, mockedContext, () => {});

    expect(response).toEqual({
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred',
        error: 'Invalid input: numberOfStocks and price must be numbers',
        event: event,
      }),
    });
  });
});
