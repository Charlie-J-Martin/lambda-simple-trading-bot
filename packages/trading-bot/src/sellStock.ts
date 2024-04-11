import { lambdaClient } from '../../lambda-client/src/lambdaClient';
import { InvokeCommand } from '@aws-sdk/client-lambda';
import { logger } from '../../pino/src/logger';

export const sellStock = async (stocks: number, price: number) => {
  try {
    const eventPayload = {
      stocks,
      price,
    };

    const command = new InvokeCommand({
      FunctionName: 'SellStockLambdaFunction',
      Payload: JSON.stringify(eventPayload),
    });

    const response = await lambdaClient.send(command);
    const payload = response.Payload as Uint8Array;
    const decodedPayload = JSON.parse(Buffer.from(payload).toString());
    const { cash } = JSON.parse(decodedPayload.body);
    logger.info(`Sold ${stocks} stocks at $${price} each, cash: $${cash}`);
    return [0, cash];
  } catch (err) {
    console.error('Error triggering Lambda:', err);
    throw err;
  }
};
