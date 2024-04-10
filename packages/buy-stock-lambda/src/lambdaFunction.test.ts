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
  it('should calculate the number of stocks and remaining cash correctly - simple', async () => {
    const event = {
      cash: 1000,
      price: 100,
    };

    const response = await handler(event, mockedContext, () => {});

    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        numberOfStocks: 10,
        remainingCash: 0,
      }),
    });
  });

  it('should calculate the number of stocks and remaining cash correctly - complex', async () => {
    const event = {
      cash: 9466495,
      price: 194,
    };

    const response = await handler(event, mockedContext, () => {});

    expect(response).toEqual({
      statusCode: 200,
      body: JSON.stringify({
        numberOfStocks: 48796.36598,
        remainingCash: 0,
      }),
    });
  });

  it('should return an error if cash or price is not a number', async () => {
    const event = {
      cash: '1000',
      price: 100,
    };

    const response = await handler(event, mockedContext, () => {});

    expect(response).toEqual({
      statusCode: 500,
      body: JSON.stringify({
        message: 'An error occurred',
        error: 'Invalid input: cash and price must be numbers',
        event: event,
      }),
    });
  });
});
