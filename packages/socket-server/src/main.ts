import { logger } from '../../pino/src/logger';
import { socketServer } from './socket';

export const main = () => {
  socketServer.listen(3000, () => {
    logger.info('Server is running on http://localhost:3000');
  });
};

main();
