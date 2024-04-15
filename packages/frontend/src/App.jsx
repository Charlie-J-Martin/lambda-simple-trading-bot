import React from 'react';
import './index.css';
import './App.css';
import Clock from './components/clock/clock';
import StockInformation from './components/StockInformation/StockInformation';

const App = () => {
  return (
    <>
      {/* <h1 className='text-4xl text-center mt-4'>Hello, Tailwind CSS!</h1> */}
      {/* <p className='text-center mt-4'>This is a simple Tailwind CSS example.</p> */}

      <div className='app-container'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-5 gap-2'>
            <div className='bg-yellow-100 p-4'>
              <Clock />
            </div>
            <div className='bg-yellow-200 p-4'>02</div>
            <div className='bg-yellow-300 p-4'>03</div>
            <div className='bg-yellow-300 p-4'>03</div>
            <div className='bg-yellow-300 p-4'>03</div>
            {/* <div className='bg-yellow-500 p-4'>05</div> */}
            <div className='bg-yellow-900 p-4'>
              <StockInformation />
            </div>
            <div className='bg-yellow-100 p-4'>10</div>
            <div className='bg-yellow-200 p-4'>11</div>
            <div className='bg-yellow-300 p-4'>12</div>
            <div className='bg-yellow-300 p-4'>03</div>
            <div className='col-span-5 bg-yellow-600 p-4'>STOCK TABles</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
