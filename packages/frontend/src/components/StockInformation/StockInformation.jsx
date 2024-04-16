import React from 'react';
import './StockInformation.css';
import Prices from '../Prices/Prices';

const data = {
  v: 73938285,
  vw: 134.5,
  o: 134.35,
  c: 134.5,
  h: 134.5,
  l: 134.35,
  t: 1618915200000,
  n: 1,
};

const nameData = {
  v: 'Volume Traded',
  vw: 'Avg. Trade Price',
  o: 'Open',
  c: 'Close',
  h: 'High',
  l: 'Low',
  t: 'Time',
  n: 'Number of Trades',
};
const previousClose = 129.5;

const StockInformation = () => {
  return (
    <div className='stock-information-container'>
      <h1 className='text-4xl text-center text-black'>APPL</h1>
      <div className='grid grid-cols-2'>
        <div className='p-3'>
          <Prices priceName={'Open'} priceValue={134.55} color={'green'} />
        </div>
        <div className='p-3'>
          <Prices priceName={'Close'} priceValue={124.53} color={'red'} />
        </div>
        <div className='p-3'>
          <Prices priceName={'High'} priceValue={137.55} />
        </div>
        <div className='p-3'>
          <Prices priceName={'Low'} priceValue={124.53} />
        </div>
        <div className='p-3'>
          <Prices priceName={'Volume Traded'} priceValue={81450345} />
        </div>
        <div className='p-3'>
          <Prices priceName={'Avg. Trade Price'} priceValue={131.53} />
        </div>
      </div>
    </div>
  );
};

export default StockInformation;

// return (
//   <>
//     <div className='app-container'>
//       <div className='container mx-auto'>
//         <div className='grid grid-cols-4 gap-2'>
//           <div className='p-4'></div>
//           <div className='col-span-2 p-4 text-center text-white'>
//             <h1 className='text-4xl text-center mt-4'>Bot Trade Central</h1>
//           </div>
//           <div className='p-4'></div>
//           <div>
//             <SimulationDayDisplay />
//           </div>
//           <div className='col-span-4'></div>
//           <div className='p-4'>
//             <StockInformation />
//           </div>
//           <div className='bg-yellow-100 p-4'></div>
//           <div className='bg-yellow-200 p-4'></div>
//           <div className='bg-yellow-300 p-4'></div>
//         </div>
//       </div>
//     </div>
//   </>
// );
