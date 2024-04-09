import { lambdaClient } from '../../lambda-client/src/lambdaClient';
import { convertToLowestDenomination } from '../../utils/src/convertToLowestDenomination';
import { InvokeCommand } from '@aws-sdk/client-lambda';

export const buyStock = async (cash: number, price: number) => {
  const convertedPrice = convertToLowestDenomination(price);
  const response = await triggerLambda(cash, convertedPrice);
  const { numberOfStocks, remainingCash } = JSON.parse(response.body);
  console.log(
    `Bought ${numberOfStocks} stocks at $${price} each, remaining cash: $${remainingCash}`
  );
  return [numberOfStocks, remainingCash];
};

// Define the function to trigger the Lambda
export async function triggerLambda(cash: number, price: number) {
  try {
    const eventPayload = {
      cash,
      price,
    };
    // Create an instance of the InvokeCommand
    const command = new InvokeCommand({
      FunctionName: 'BuyStockLambdaFunction', // Name of your Lambda function
      Payload: JSON.stringify(eventPayload), // Event payload (empty for this example)
    });

    const response = await lambdaClient.send(command);
    // convert payload from unit8array to string
    const payload = response.Payload as Uint8Array;
    const decodedPayload = JSON.parse(Buffer.from(payload).toString());
    console.log({ decodedPayload });
    return decodedPayload;
  } catch (err) {
    console.error('Error triggering Lambda:', err);
  }
}


