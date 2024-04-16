import React, { useState, useEffect } from 'react';
import './StockInformation.css';
import socketIOClient from 'socket.io-client';
import Prices from '../Prices/Prices';
import MetaData from '../MetaData/MetaData';

const StockInformation = () => {
  const [stockData, setData] = useState({
    o: 0,
    h: 0,
    l: 0,
    c: 0,
    vw: 0,
    v: 0,
  });

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');

    socket.on('AAPL', (data) => {
      setData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='stock-information-container'>
      <h1 className='text-4xl text-center text-black'>APPL</h1>
      <div className='grid grid-cols-2'>
        <div className='p-1'>
          <Prices priceName={'Open'} priceValue={stockData.o} color={'green'} />
        </div>
        <div className='p-1'>
          <Prices priceName={'Close'} priceValue={stockData.c} color={'red'} />
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='p-1'>
          <MetaData dataPointName={'High'} dataPointValue={stockData.h} />
        </div>
        <div className='p-1'>
          <MetaData dataPointName={'Low'} dataPointValue={stockData.l} />
        </div>
        <div className='p-1'>
          <MetaData
            dataPointName={'Avg. Price'}
            dataPointValue={stockData.vw}
          />
        </div>
        <div className='col-span-3 p-1'>
          <MetaData
            dataPointName={'Volume Traded'}
            dataPointValue={stockData.v}
          />
        </div>
      </div>
    </div>
  );
};

export default StockInformation;
