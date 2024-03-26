import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();

export const socketServer = http.createServer(app);

const socketio = new Server(socketServer, {
  cors: {
    origin: '*',
  },
});

socketio.on('connection', (socket) => {
  console.log('Client connected');

  const tickers = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB'];

  tickers.forEach((ticker) => {
    socket.on(ticker, (stockResult) => {
      console.log(stockResult);
      socketio.emit(ticker, stockResult);
    });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
