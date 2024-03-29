import { socket } from '../../socket-client/src/socketClient';
import { StockResult } from './types';

export const sendMessageToWebSocket = (
  ticker: string,
  stockResult: StockResult
) => {
  socket.emit(ticker, stockResult);
};
