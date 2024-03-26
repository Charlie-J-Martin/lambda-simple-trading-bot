import { StockResult } from './types';
import socketIOClient from 'socket.io-client';

const serverUrl = 'http://localhost:3000';
const socket = socketIOClient(serverUrl);

export const sendMessageToWebSocket = (
  ticker: string,
  stockResult: StockResult
) => {
  socket.emit(ticker, stockResult);
};
