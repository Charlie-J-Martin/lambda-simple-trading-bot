import { delay } from '../../utils/src/delay';
import { sendMessageToWebSocket } from './send';
import APPLData from './data/APPL.json';

export const simulate = async () => {
  let day = 0;
  while (true) {
    sendMessageToWebSocket(APPLData.ticker, APPLData.results[day], day + 1);
    await delay(20000);
    day++;
  }
};
