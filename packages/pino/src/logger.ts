import pino from 'pino';
import pinoElasticsearch from 'pino-elasticsearch';

const streamToElastic = pinoElasticsearch({
  index: 'logs',
  type: 'log',
  node: 'http://localhost:9200',
});

export const logger = pino(
  {
    level: 'info',
  },
  streamToElastic
);
