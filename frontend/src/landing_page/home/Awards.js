import React from 'react';

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center p-4">
          <img 
            src="media/images/largestBroker.svg" 
            alt="Largest Broker Illustration" 
            className="img-fluid"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 p-4">
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
            Largest Stock Broker in India
          </h1>
          <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
            2+ million <strong>TradeNova</strong> clients contribute to over <strong>15%</strong> of all retail order volumes in India daily by trading and investing in:
          </p>

          {/* Investment Options */}
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">📈 Futures and Options</li>
                <li className="mb-2">⚙️ Commodity Derivatives</li>
                <li className="mb-2">💱 Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li className="mb-2">📊 Stocks and IPOs</li>
                <li className="mb-2">💼 Direct Mutual Funds</li>
                <li className="mb-2">🏛️ Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4">
            <img 
              src="media/images/pressLogos.png" 
              alt="Press Logos" 
              className="img-fluid rounded shadow-sm" 
              style={{ maxWidth: '90%' }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
