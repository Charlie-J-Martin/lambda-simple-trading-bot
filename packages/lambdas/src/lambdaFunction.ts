import { Handler } from 'aws-lambda';

// event is any data that is passed to the function when it is invoked
// context provides information about the invocation, function, and execution environment

export const handler: Handler = async (event, context) => {
  console.log(
    'Embrace challenges with courage and persistence. Each obstacle you overcome is a step forward towards your goals. Believe in yourself and keep striving for greatness.: \n' +
      JSON.stringify(event, null, 2)
  );
  return context.logStreamName;
};
