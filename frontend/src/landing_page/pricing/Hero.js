import React from 'react';

function Hero() {
  return (
    <div className="container">
      {/* Header */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h2 className="fw-bold">Pricing & Charges</h2>
        <h5 className="text-muted mt-2">Transparent charges. No hidden fees.</h5>
      </div>

      {/* Pricing Cards */}
      <div className="row p-5 text-center">
        {/* Equity Delivery */}
        <div className="col-md-4 p-4">
          <div className="border rounded p-4 h-100 shadow-sm">
            <img
              src="media/images/pricingEquity.svg"
              alt="Equity Delivery"
              className="img-fluid mb-3"
              style={{ maxHeight: '60px' }}
            />
            <h5 className="fw-semibold">Free Equity Delivery</h5>
            <p className="text-muted mt-2">
              All equity delivery investments (NSE & BSE) are absolutely free — ₹0 brokerage.
            </p>
          </div>
        </div>

        {/* Intraday & F&O */}
        <div className="col-md-4 p-4">
          <div className="border rounded p-4 h-100 shadow-sm">
            <img
              src="media/images/intradayTrades.svg"
              alt="Intraday Trades"
              className="img-fluid mb-3"
              style={{ maxHeight: '60px' }}
            />
            <h5 className="fw-semibold">Intraday & F&O Trades</h5>
            <p className="text-muted mt-2">
              Flat ₹20 or 0.03% (whichever is lower) per order across equity, currency, and commodity. Flat ₹20 on all options.
            </p>
          </div>
        </div>

        {/* Direct Mutual Funds */}
        <div className="col-md-4 p-4">
          <div className="border rounded p-4 h-100 shadow-sm">
            <img
              src="media/images/pricingEquity.svg"
              alt="Direct Mutual Funds"
              className="img-fluid mb-3"
              style={{ maxHeight: '60px' }}
            />
            <h5 className="fw-semibold">Free Direct Mutual Funds</h5>
            <p className="text-muted mt-2">
              Invest in direct mutual funds at ₹0 — no commissions, no DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
