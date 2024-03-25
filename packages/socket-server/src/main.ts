import { socketServer } from './socket';

export const main = () => {
  socketServer.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
};

main();
