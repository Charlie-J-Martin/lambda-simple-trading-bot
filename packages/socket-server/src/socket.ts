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
    socket.on(ticker, (stockResult) => {
      logger.info(stockResult);
      socketio.emit(ticker, stockResult);
    });
  });

  socket.on('day', (day) => {
    socketio.emit('day', day);
  });

  socket.on('statistics', (statistics) => {
    socketio.emit('statistics', statistics);
  });

  socket.on('disconnect', () => {
    logger.info('Client disconnected');
  });
});
