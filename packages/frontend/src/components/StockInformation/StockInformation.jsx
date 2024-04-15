import React from 'react';
import './StockInformation.css';

const StockInformation = () => {
  return (
    <div className='stockinformation-container'>
      <FinancialTable />
    </div>
  );
};

export default StockInformation;

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

const statsData = {
  totalProfitLoss: 0,
  totalProfitLossPercentage: 0,
  totalTrades: 0,
  buyTrades: 0,
  buyTradesPercentage: 0,
  sellTrades: 0,
  sellTradesPercentage: 0,
  holdTrades: 0,
  holdTradesPercentage: 0,
  currentCash: 1000,
  currentStocks: 0,
};

const FinancialTable = () => {
  return (
    <div className='overflow-y-auto'>
      <table className='table-auto text-center bg-white'>
        <tbody>
          <tr>
            <td className='border px-4 py-2 font-semibold'>Open</td>
            <td className='border px-4 py-2'>{data.o}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2 font-semibold'>Close</td>
            <td className='border px-4 py-2'>{data.c}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2 font-semibold'>High</td>
            <td className='border px-4 py-2'>{data.h}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2 font-semibold'>Low</td>
            <td className='border px-4 py-2'>{data.l}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2 font-semibold'>Volume</td>
            <td className='border px-4 py-2'>{data.v}</td>
          </tr>
          <tr>
            <td className='border px-4 py-2 font-semibold'>Traded Avg</td>
            <td className='border px-4 py-2'>{data.vw}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
