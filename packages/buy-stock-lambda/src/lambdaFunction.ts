import { Handler } from 'aws-lambda';

export const handler: Handler = async (event, context) => {
  console.log(
    'Embrace challenges with courage and persistence. Each obstacle you overcome is a step forward towards your goals. Believe in yourself and keep striving for greatness.: \n' +
      JSON.stringify(event, null, 2)
  );
  return context.logStreamName;
};
