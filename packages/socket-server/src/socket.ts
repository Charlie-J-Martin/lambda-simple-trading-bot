import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import { logger } from '../../pino/src/logger';

const app = express();

export const socketServer = http.createServer(app);

const socketio = new Server(socketServer, {
  cors: {
    origin: '*',
  },
});

socketio.on('connection', (socket) => {
  logger.info('Client connected');

  const tickers = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB'];

  tickers.forEach((ticker) => {
    socket.on(ticker, (stockResult, day) => {;
      logger.info(stockResult);
      socketio.emit(ticker, stockResult, day);
    });
  });

  socket.on('disconnect', () => {
    logger.info('Client disconnected');
  });
});
