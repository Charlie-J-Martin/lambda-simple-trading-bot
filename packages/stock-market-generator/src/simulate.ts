import { delay } from './utils/delay';
import { sendMessageToWebSocket } from './send';
import APPLData from './data/APPL.json';

export const simulate = async () => {
  let day = 0;
  while (true) {
    sendMessageToWebSocket(APPLData.ticker, APPLData.results[day]);
    await delay(1000);
    day++;
  }
};
