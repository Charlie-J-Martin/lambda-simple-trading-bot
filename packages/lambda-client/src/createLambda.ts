import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
} from '@aws-sdk/client-lambda';
import { createReadStream } from 'fs';
import { lambdaClient } from './lambdaClient';
import { streamToUint8Array } from './utils/streamToUint8Array';

export const createLambdaFunction = async (
  zipFileLocation: string,
  lambdaFunction: string,
  lambdaHandler: string
): Promise<void> => {
  const zipFileContent = createReadStream(zipFileLocation);

  const params: CreateFunctionCommandInput = {
    FunctionName: lambdaFunction,
    Runtime: 'nodejs18.x',
    Role: 'arn:aws:iam::123456789012:role/service-role/MyLambdaRole',
    Handler: lambdaHandler,
    Code: {
      ZipFile: await streamToUint8Array(zipFileContent),
    },
  };

  try {
    const data = await lambdaClient.send(new CreateFunctionCommand(params));
    console.log('Function created:', data);
  } catch (error) {
    console.error('Error creating function:', error);
  }
};
