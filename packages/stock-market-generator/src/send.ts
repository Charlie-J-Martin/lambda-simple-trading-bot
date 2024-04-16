import { socket } from '../../socket-client/src/socketClient';
import { StockResult } from '../../types/types';

export const sendMessageToWebSocket = (
  ticker: string,
  stockResult: StockResult,
  day: number
) => {
  socket.emit('day', day);
  socket.emit(ticker, stockResult);
};
