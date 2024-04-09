import { LambdaClient } from '@aws-sdk/client-lambda';

export const lambdaClient = new LambdaClient({
  region: 'eu-west-1',
  endpoint: 'http://127.0.0.1:4566',
  credentials: {
    accessKeyId: 'YOUR_ACCESS_KEY_ID',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  },
});
