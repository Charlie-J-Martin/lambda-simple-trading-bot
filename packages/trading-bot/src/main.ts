import socketIOClient from 'socket.io-client';

const serverUrl = 'http://localhost:3000';
const socket = socketIOClient(serverUrl);

const main = () => {
  socket.on('AAPL', (message) => {
    console.log(JSON.stringify(message));
  });
};

main();
