import { createLambdaFunction } from '../../lambda-client/src/createLambda';

const main = async () => {
  const zipFileLocation = './dist/lambdaFunction.zip';
  const lambdaFunctionName = 'BuyStockLambdaFunction';
  const lambdaHandler = 'lambdaFunction.handler';

  await createLambdaFunction(
    zipFileLocation,
    lambdaFunctionName,
    lambdaHandler
  );
};

main();
