import React, { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';
import Chart from 'chart.js/auto';

const ChartJS = () => {
  const [openPrices, setOpenPrices] = useState([]);
  const [closePrices, setClosePrices] = useState([]);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const socket = socketIOClient('http://localhost:3001');

    socket.on('AAPL', (data) => {
      setOpenPrices((prevOpenPrices) => [...prevOpenPrices, data.o]);
      setClosePrices((prevClosePrices) => [...prevClosePrices, data.c]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (openPrices.length > 0 && closePrices.length > 0) {
      updateChart();
    }
  }, [openPrices, closePrices]);

  const updateChart = () => {
    if (chartInstance.current) {
      chartInstance.current.data.labels = Array.from(
        { length: openPrices.length },
        (_, i) => i + 1
      );
      chartInstance.current.data.datasets[0].data = openPrices;
      chartInstance.current.data.datasets[1].data = closePrices;
      chartInstance.current.update();
    } else {
      const ctx = chartRef.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: openPrices.length }, (_, i) => i + 1),
          datasets: [
            {
              label: 'Open Prices',
              data: openPrices,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'Close Prices',
              data: closePrices,
              borderColor: 'red',
              fill: false,
            },
          ],
        },
      });
    }
  };
  return <canvas ref={chartRef} />;
};

export default ChartJS;
