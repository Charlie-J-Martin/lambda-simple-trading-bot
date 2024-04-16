import React from 'react';
import './Prices.css';

const Prices = ({ priceName, priceValue, color }) => {
  return (
    <>
      <div className='prices-container' style={{ backgroundColor: color }}>
        <h4>{priceName}</h4>
        <h2>{priceValue}</h2>
      </div>
    </>
  );
};

export default Prices;

// For each key in data, pass the component the key and value as props
// For example, for the key 'v' and value 73938285, pass the component the props v={73938285}
// The component should render the key and value in a div
