import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import './TradingBot.css';

const TradingBot = () => {
  const [statistics, setStatistics] = useState({
    currentCash: 0,
    currentStocks: 0,
    buyTrades: 0,
    sellTrades: 0,
    holdTrades: 0,
    buyTradesPercentage: 0,
    sellTradesPercentage: 0,
    holdTradesPercentage: 0,
    totalProfitLoss: 0,
    totalProfitLossPercentage: 0,
    totalTrades: 0,
  });

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');

    socket.on('statistics', (data) => {
      setStatistics(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  console.log({ stats: statistics });
  return (
    <>
      <h1 className='text-3xl text-center'>Trading Bot</h1>

      <div className='trading-bot-container'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='p-2'>
            <h1 className='text-xl text-center'>
              Cash Held: ${statistics.currentCash}
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-xl text-center'>
              Stocks Held: {statistics.currentStocks}
            </h1>
          </div>
        </div>
        <div>
          <div className='p-2'>
            <h1 className='text-center'>
              Buy Calls: {statistics.buyTrades} |{' '}
              {statistics.buyTradesPercentage}%
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-center'>
              Sell Calls: {statistics.sellTrades} |{' '}
              {statistics.sellTradesPercentage}%
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-center'>
              Hold Calls: {statistics.holdTrades} |{' '}
              {statistics.sellTradesPercentage}%
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-center'>
              Profit / Loss: ${statistics.totalProfitLoss} |{' '}
              {statistics.totalProfitLossPercentage}%
            </h1>
          </div>
          <div className='p-2'>
            <h1 className='text-center'>
              Total Trades: {statistics.totalTrades}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradingBot;
