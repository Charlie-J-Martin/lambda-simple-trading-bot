import React from 'react';
import './index.css';
import './App.css';
import SimulationDayDisplay from './components/SimulationDayDisplay/SimulationDayDisplay';
import StockInformation from './components/StockInformation/StockInformation';
import TradingBot from './components/TradingBot/TradingBot';

const App = () => {
  return (
    <>
      <div className='app-container'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='col-span-2 p-4 text-center text-white'>
              <h1
                className='text-4xl text-center mt-4'
                style={{ color: 'black' }}
              >
                Simple Stock Market
              </h1>
            </div>
            <div>
              <SimulationDayDisplay />
            </div>
            <div className='col-span-2 '></div>
            <div className='bg-yellow-100 flex justify-center'>
              <StockInformation ticker={'AAPL'} />
            </div>
            <div className='bg-yellow-100 p-4'></div>
            <div className='bg-yellow-400 p-4'>
              <TradingBot />
            </div>
            <div className='bg-yellow-400 p-4'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
