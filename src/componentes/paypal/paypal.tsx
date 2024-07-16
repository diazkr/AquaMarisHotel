import React from 'react';

const PayPalView = () => {
  return (
    <div className="paypal-container">
      <iframe 
        src="/paypal.html" 
        title="PayPal"
        width="100%" 
        height="500px" 
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default PayPalView;
