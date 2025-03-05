import React, { useState } from 'react';
import './PriceAlertForm.css';

const PriceAlertForm = ({ onSetAlert, productName, currentPrice }) => {
  const [targetPrice, setTargetPrice] = useState('');
  const [error, setError] = useState('');

  const handlePriceChange = (event) => {
    setTargetPrice(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!targetPrice || targetPrice <= 0 || targetPrice > currentPrice) {
      setError('Please enter a valid price lower than the current price.');
      return;
    }
    onSetAlert(targetPrice); // Call function to save the alert
    setTargetPrice('');
  };

  return (
    <div className="price-alert-form">
      <h2 className="form-title">Set Price Alert for {productName}</h2>
      <p className="current-price">Current Price: ${currentPrice}</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">Target Price</label>
          <input
            type="number"
            placeholder="Enter target price"
            value={targetPrice}
            onChange={handlePriceChange}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Set Alert</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PriceAlertForm;
