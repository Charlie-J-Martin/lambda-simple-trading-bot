import { logger } from '../../pino/src/logger';
import { socketServer } from './socket';

export const main = () => {
  socketServer.listen(3001, () => {
    logger.info('Server is running on http://localhost:3001');
  });
};

main();
