import React from 'react';
import './index.css';
import './App.css';
import SimulationDayDisplay from './components/SimulationDayDisplay/SimulationDayDisplay';
import StockInformation from './components/StockInformation/StockInformation';

const App = () => {
  return (
    <>
      <div className='app-container'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 gap-2'>
            <div className='p-4'></div>
            <div className='col-span-3 p-4 text-center text-white'>
              <h1 className='text-4xl text-center mt-4'>Bot Trade Central</h1>
            </div>
            <div className='p-4'></div>
            <div>
              <SimulationDayDisplay />
            </div>
            <div className='col-span-4'></div>
            <div className='bg-yellow-100 p-4'>
              <StockInformation />
            </div>
            <div className='bg-yellow-100 p-4'>10</div>
            <div className='bg-yellow-200 p-4'>11</div>
            <div className='bg-yellow-300 p-4'>12</div>
            <div className='bg-yellow-300 p-4'>13</div>
            <div className='col-span-5 bg-yellow-600 p-4'>STOCK TABles</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
