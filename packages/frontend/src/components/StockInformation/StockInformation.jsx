import React from 'react';
import './StockInformation.css';
import useSocket from '../../useSocket';
import Prices from '../Prices/Prices';
import MetaData from '../MetaData/MetaData';

const StockInformation = ({ ticker }) => {
  const stockData = useSocket('http://localhost:3001', 'AAPL');

  return (
    <div className='stock-information-container'>
      <h1 className='text-4xl text-center text-black'>APPL</h1>
      <div className='grid grid-cols-2'>
        <div className='p-1'>
          <Prices
            priceName={'Open'}
            priceValue={stockData.data.o}
            color={'green'}
          />
        </div>
        <div className='p-1'>
          <Prices
            priceName={'Close'}
            priceValue={stockData.data.c}
            color={'red'}
          />
        </div>
      </div>
      <div className='grid grid-cols-3'>
        <div className='p-1'>
          <MetaData dataPointName={'High'} dataPointValue={stockData.data.h} />
        </div>
        <div className='p-1'>
          <MetaData dataPointName={'Low'} dataPointValue={stockData.data.l} />
        </div>
        <div className='p-1'>
          <MetaData
            dataPointName={'Avg. Price'}
            dataPointValue={stockData.data.vw}
          />
        </div>
        <div className='col-span-3 p-1'>
          <MetaData
            dataPointName={'Volume Traded'}
            dataPointValue={stockData.data.v}
          />
        </div>
      </div>
    </div>
  );
};

export default StockInformation;
