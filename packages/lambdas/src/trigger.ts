import { InvokeCommand } from '@aws-sdk/client-lambda';
import { lambdaClient } from '../../lambda-client/src/lambdaClient';

// Define the function to trigger the Lambda
export async function triggerLambda() {
  try {
    // Create an instance of the InvokeCommand
    const command = new InvokeCommand({
      FunctionName: 'BuyStockLambdaFunction', // Name of your Lambda function
      Payload: '{}', // Event payload (empty for this example)
    });

    const response = await lambdaClient.send(command);
  } catch (err) {
    console.error('Error triggering Lambda:', err);
  }
}

// Call the function to trigger the Lambda
triggerLambda();
