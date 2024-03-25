import { StockResult } from './types';
import APPLData from './data/APPL.json';
import socketIOClient from 'socket.io-client';

const serverUrl = 'http://localhost:3000';
const socket = socketIOClient(serverUrl);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const main = async () => {
  let day = 0;
  while (true) {
    sendToStockMarket(APPLData.results[day]);
    day++;
    await delay(1000);
  }
};

// function to send data to the stock market
const sendToStockMarket = (stockResult: StockResult) => {
  socket.emit('stock-data', stockResult);
  // socket.emit('stock-data', stockResult);
  // console.log('Sending data to stock market:', stockResult);
  // send data to stock market
};

main();
