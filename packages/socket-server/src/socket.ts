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

  socket.on('stock-data', (message) => {
    console.log(message);
    socketio.emit('message', `${socket.id.substring(0, 2)} said ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
