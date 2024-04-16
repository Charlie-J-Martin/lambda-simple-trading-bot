import React, { useState, useEffect } from 'react';
import './SimulationDayDisplay.css';
import socketIOClient from 'socket.io-client';

const SimulationDayDisplay = () => {
  const [day, setDay] = useState(0);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');

    socket.on('day', (data) => {
      setDay(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <div className='simulation-day-display-container'>
        <h3>Day: {day}</h3>
      </div>
    </>
  );
};

export default SimulationDayDisplay;
