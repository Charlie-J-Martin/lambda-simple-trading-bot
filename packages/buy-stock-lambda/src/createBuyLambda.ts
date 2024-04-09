import { createLambdaFunction } from '../../lambda-client/src/createLambda';

const zipFileLocation = './dist/lambdaFunction.zip';
const lambdaFunctionName = 'BuyStockLambdaFunction';
const lambdaHandler = 'lambdaFunction.handler';

export const createBuyLambda = async () => {
  await createLambdaFunction(
    zipFileLocation,
    lambdaFunctionName,
    lambdaHandler
  );
};
