import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const useSocket = (url, event) => {
  const [data, setData] = useState({
    o: 0,
    h: 0,
    l: 0,
    c: 0,
    vw: 0,
    v: 0,
  });
  const [day, setDay] = useState(0);

  useEffect(() => {
    const socket = socketIOClient(url);

    socket.on(event, (data, day) => {
      setData(data);
      setDay(day);
    });

    return () => {
      socket.disconnect();
    };
  }, [url, event]);

  return { data, day };
};

export default useSocket;
