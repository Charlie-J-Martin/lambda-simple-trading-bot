import { InvokeCommand } from '@aws-sdk/client-lambda';
import { lambdaClient } from '../../lambda-client/src/lambdaClient';

// Define the function to trigger the Lambda
export async function triggerLambda() {
  try {
    const eventPayload = {
      cash: 104560,
      price: 50,
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
    return decodedPayload;
  } catch (err) {
    console.error('Error triggering Lambda:', err);
  }
}

// Call the function to trigger the Lambda
triggerLambda();
