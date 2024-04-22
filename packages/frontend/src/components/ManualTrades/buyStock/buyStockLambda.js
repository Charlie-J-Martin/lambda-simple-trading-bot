import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';

const lambdaClient = new LambdaClient({
  region: 'eu-west-1',
  endpoint: 'http://127.0.0.1:4566',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  },
});

export const buyStockWithLambda = async (cash, price) => {
  const decoder = new TextDecoder('utf-8');
  try {
    const eventPayload = {
      cash,
      price,
    };
    const command = new InvokeCommand({
      FunctionName: 'BuyStockLambdaFunction',
      Payload: JSON.stringify(eventPayload),
    });
    const response = await lambdaClient.send(command);
    const decodedResponse = decoder.decode(response.Payload);
    const payload = JSON.parse(decodedResponse);
    const { remainingCash, numberOfStocks } = JSON.parse(payload.body);

    return [numberOfStocks, remainingCash];
  } catch (err) {
    console.error('Error triggering Lambda:', err);
    throw err;
  }
};

