import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './ManualTrades.css';

const convertToLowestDenomination = (amount) => {
  // Assuming amount is in dollars, convert it to cents
  return Math.round(amount * 100);
};

const buyStock = (cash, cashInput, stockPrice, stock) => {
  const cashInCents = convertToLowestDenomination(cash);
  const cashInputInCents = convertToLowestDenomination(cashInput);
  const stockPriceInCents = convertToLowestDenomination(stockPrice);

  const numberOfStocks = cashInputInCents / stockPriceInCents;
  const cost = numberOfStocks * stockPriceInCents;
  const remainingCash = cashInCents - cost;
  const remainingCashInDollars = remainingCash / 100;
  const allStocks = stock + numberOfStocks;

  return [remainingCashInDollars, allStocks];
};

const sellStock = (cash, stockInput, stockPrice, stock) => {
  const cashInCents = convertToLowestDenomination(cash);
  const stockPriceInCents = convertToLowestDenomination(stockPrice);

  const valueOfStocks = stockInput * stockPriceInCents;
  const cashMade = valueOfStocks;
  const remainingStocks = stock - stockInput;
  const remainingCash = cashInCents + cashMade;
  const remainingCashInDollars = remainingCash / 100;

  return [remainingCashInDollars, remainingStocks];
};

const ManualTrades = () => {
  const [cashInput, setCashInput] = useState('');
  const [stockInput, setStockInput] = useState('');
  const [cash, setCash] = useState(1000);
  const [stock, setStock] = useState(0);
  const [stockData, setData] = useState({
    o: 134.3,
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

  const handleSubmitBuy = (event) => {
    event.preventDefault();
    const [newCashAmount, newStockAmount] = buyStock(
      cash,
      cashInput,
      stockData.o,
      stock
    );
    console.log({ newCashAmount, newStockAmount });
    setCash(newCashAmount);
    setStock(newStockAmount);
  };

  const handleSubmitSell = (event) => {
    event.preventDefault();
    const [newCashAmount, newStockAmount] = sellStock(
      cash,
      stockInput,
      stockData.o,
      stock
    );
    console.log({ newCashAmount, newStockAmount });
    setCash(newCashAmount);
    setStock(newStockAmount);
    // Set the new cash and stock values - Using Lambda
    // We then set the cash and stock values to the newCash and newStock values
  };

  return (
    <>
      <h1 className='text-3xl text-center'>Manual Trading</h1>
      <div className='manual-trades-container'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='p-2'>
            <h1 className='text-xl text-center'>Cash Held: ${cash}</h1>
          </div>
          <div className='p-2'>
            <h1 className='text-xl text-center'>Stocks Held: {stock}</h1>
          </div>

          <div className='max-w-md mx-auto p-6'>
            <form
              onSubmit={handleSubmitBuy}
              className='flex flex-col items-center'
            >
              <div className='mb-4 flex flex-col items-center'>
                <label htmlFor='numberInput' className='block text-sm'>
                  Amount of Stock to Buy:
                </label>
                <input
                  type='number'
                  id='buyInput'
                  name='buyInput'
                  className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-24 shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-1'
                  value={cashInput}
                  onChange={(e) => {
                    const inputValue = Math.max(1, parseInt(e.target.value));
                    setCashInput(Math.min(inputValue, cash));
                  }}
                  max={cash}
                />
              </div>
              <div className='p-2 text-center'>Price: {stockData.o}</div>
              <button
                type='submit'
                className='bg-blue-400 hover:bg-blue-600 text-black py-2 px-4 rounded'
              >
                Buy
              </button>
            </form>
          </div>
          <div className='max-w-md mx-auto p-6'>
            <form
              onSubmit={handleSubmitSell}
              className='flex flex-col items-center'
            >
              <div className='mb-4 flex flex-col items-center'>
                <label htmlFor='numberInput' className='block text-sm'>
                  Amount of Stock to Sell:
                </label>
                <input
                  type='number'
                  id='sellInput'
                  name='sellInput'
                  className='mt-1 focus:ring-blue-500 focus:border-blue-500 block w-24 shadow-sm sm:text-sm border border-gray-300 rounded-md px-2 py-1'
                  value={stockInput}
                  onChange={(e) => {
                    const inputValue = Math.max(1, parseInt(e.target.value));
                    setStockInput(Math.min(inputValue, stock));
                  }}
                  max={stock}
                />
              </div>
              <div className='p-2 text-center'>Price: ${stockData.o}</div>
              <button
                type='submit'
                className='bg-red-400 hover:bg-red-600 text-black py-2 px-4 rounded'
              >
                Sell
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManualTrades;
