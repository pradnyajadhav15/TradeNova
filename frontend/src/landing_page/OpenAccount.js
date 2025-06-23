import React from 'react';
import { Link } from 'react-router-dom'; // 

function OpenAccount() {
  return (
    <div className="container text-center my-5 py-5">
      {/* Trust Indicator */}
      <p className="text-success fw-semibold mb-2" style={{ fontSize: '1rem' }}>
        Join over 1 million investors already on TradeNova!
      </p>

      {/* Heading & Description */}
      <h1 className="fw-bold mb-3" style={{ fontSize: '2.3rem' }}>
        Open a TradeNova Account 
      </h1>
      <p className="text-muted mb-4" style={{ fontSize: '1.05rem' }}>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday & F&O trades.
      </p>

      {/* CTA Button */}
      <Link 
        to="/signup" 
        className="btn btn-primary px-4 py-2 fs-5 rounded-pill shadow"
        style={{ minWidth: '200px' }}
      >
        Sign Up Now
      </Link>
    </div>
  );
}

export default OpenAccount;
