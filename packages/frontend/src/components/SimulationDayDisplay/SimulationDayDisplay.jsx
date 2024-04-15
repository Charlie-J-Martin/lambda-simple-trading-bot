import React from 'react';
import './SimulationDayDisplay.css';

const daay = 9;

const SimulationDayDisplay = ({ day }) => {
  return (
    <>
      <div className='simulation-day-display-container'>
        <h3>Day: {daay}</h3>
      </div>
    </>
  );
};

export default SimulationDayDisplay;
