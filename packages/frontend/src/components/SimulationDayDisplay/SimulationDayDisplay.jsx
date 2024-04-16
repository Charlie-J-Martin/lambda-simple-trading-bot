import React from 'react';
import './SimulationDayDisplay.css';
import useSocket from '../../useSocket';

const SimulationDayDisplay = () => {
  const stockData = useSocket('http://localhost:3001', 'AAPL');
  return (
    <>
      <div className='simulation-day-display-container'>
        <h3>Day: {stockData.day}</h3>
      </div>
    </>
  );
};

export default SimulationDayDisplay;
