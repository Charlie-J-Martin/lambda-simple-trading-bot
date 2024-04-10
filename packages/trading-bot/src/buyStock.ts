import { lambdaClient } from '../../lambda-client/src/lambdaClient';
import { convertToLowestDenomination } from '../../utils/src/convertToLowestDenomination';
import { InvokeCommand } from '@aws-sdk/client-lambda';

export const buyStock = async (cash: number, price: number) => {
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
    const payload = response.Payload as Uint8Array;
    const decodedPayload = JSON.parse(Buffer.from(payload).toString());
    const { numberOfStocks, remainingCash } = JSON.parse(decodedPayload.body);
    console.log(
      `Bought ${numberOfStocks} stocks at $${price} each, remaining cash: $${remainingCash}`
    );
    return [numberOfStocks, remainingCash];
  } catch (err) {
    console.error('Error triggering Lambda:', err);
    throw err;
  }
};
