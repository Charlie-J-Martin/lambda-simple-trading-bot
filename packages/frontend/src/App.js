import React from 'react';
import './index.css'; // or './index.scss' if using SCSS
import Clock from './components/clock';

const App = () => {
  return (
    <>
      <h1 className='text-4xl text-center mt-4'>Hello, Tailwind CSS!</h1>
      <p className='text-center mt-4'>This is a simple Tailwind CSS example.</p>

      <div className='container mx-auto'>
        <div class='grid grid-cols-3 gap-4'>
          <div class='bg-yellow-100 p-4 rounded-lg'>
            <Clock />
          </div>
          <div class='bg-yellow-200 p-4 rounded-lg'>02</div>
          <div class='bg-yellow-300 p-4 rounded-lg'>03</div>
          {/* <div class='bg-yellow-500 p-4'>05</div> */}
          <div class='col-span-3 bg-yellow-600 p-4 rounded-lg'>
            STOCK TABles
          </div>
          <div class='bg-yellow-700 p-4'>07</div>
          <div class='bg-yellow-800 p-4'>08</div>
          <div class='bg-yellow-900 p-4'>09</div>
          <div class='bg-yellow-100 p-4'>10</div>
          <div class='bg-yellow-200 p-4'>11</div>
          <div class='bg-yellow-300 p-4'>12</div>
        </div>
      </div>
    </>
  );
};

export default App;
