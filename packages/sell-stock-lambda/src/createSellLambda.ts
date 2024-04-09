import { createLambdaFunction } from '../../lambda-client/src/createLambda';

const zipFileLocation = './dist/lambdaFunction.zip';
const lambdaFunctionName = 'SellStockLambdaFunction';
const lambdaHandler = 'lambdaFunction.handler';

export const createSellLambda = async () => {
  await createLambdaFunction(
    zipFileLocation,
    lambdaFunctionName,
    lambdaHandler
  );
};
