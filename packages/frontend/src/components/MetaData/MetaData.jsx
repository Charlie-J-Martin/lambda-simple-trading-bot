import React from 'react';
import './MetaData.css';

const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const MetaData = ({ dataPointName, dataPointValue }) => {
  const shortenedDataPointValue = dataPointValue.toFixed(2);

  const readableVolume = formatNumberWithCommas(dataPointValue);

  return (
    <>
      <div className='meta-data-container'>
        <h4 className='data-point-name'>{dataPointName}</h4>
        {dataPointName === 'Volume Traded' ? (
          <h2>{readableVolume}</h2>
        ) : (
          <h2>{shortenedDataPointValue}</h2>
        )}
      </div>
    </>
  );
};

export default MetaData;
