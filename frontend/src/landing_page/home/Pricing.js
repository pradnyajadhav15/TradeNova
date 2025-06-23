import React from 'react';
import { Link } from 'react-router-dom'; 

function Pricing() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
            Unbeatable Pricing 
          </h2>
          <p className="text-muted mb-3" style={{ fontSize: '1.05rem' }}>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees with no hidden charges.
          </p>
          <Link to="/pricing" className="text-decoration-none text-primary fw-semibold">
            See pricing <i className="fa-solid fa-arrow-right ms-1"></i>
          </Link>
        </div>

        {/* Right Pricing Boxes */}
        <div className="col-md-7">
          <div className="row g-4 text-center">
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm h-100">
                <h1 className="fw-bold text-success mb-2">₹0</h1>
                <p className="text-muted mb-0">
                  Free equity delivery <br />& direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm h-100">
                <h1 className="fw-bold text-primary mb-2">₹20</h1>
                <p className="text-muted mb-0">Flat fee for intraday & F&O</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
