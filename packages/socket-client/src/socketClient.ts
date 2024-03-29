import socketIOClient from 'socket.io-client';

const serverUrl = 'http://localhost:3000';
export const socket = socketIOClient(serverUrl);
