import React from 'react';
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">
        {/* Left Text Content */}
        <div className="col-md-6 p-4">
          <h1 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
            Trust With Confidence 
          </h1>

          <div className="mb-4">
            <h4 className="fw-semibold">Customer-first always</h4>
            <p className="text-muted">
              That’s why 1.3+ crore customers trust TradeNova with ₹3.5+ lakh crores worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications. High-quality apps you use your way.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold">The TradeNova universe</h4>
            <p className="text-muted">
              Not just an app — a whole ecosystem. Our investment in 30+ fintech startups tailors services to your needs.
            </p>
          </div>

          <div>
            <h4 className="fw-semibold">Do better with money</h4>
            <p className="text-muted">
              With initiatives like <strong>Nudge</strong> and <strong>Kill Switch</strong>, we help you build better money habits.
            </p>
          </div>
        </div>

        {/* Right Image & Links */}
        <div className="col-md-6 text-center p-4">
          <img 
            src="media/images/ecosystem.png" 
            alt="Ecosystem" 
            className="img-fluid rounded shadow-sm mb-4"
            style={{ maxWidth: '90%' }}
          />

          {/* CTA Links */}
          <div>
            <Link to="/product" className="text-decoration-none text-primary fw-semibold me-4">
              Explore our products <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>

            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#kiteDemoModal"
              className="text-decoration-none text-primary fw-semibold"
            >
              Try Kite demo <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for Demo */}
      <div
        className="modal fade"
        id="kiteDemoModal"
        tabIndex="-1"
        aria-labelledby="kiteDemoModalLabel"
        aria-hidden="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="kiteDemoModalLabel">Kite Demo Preview</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This is a simulated trading experience to showcase how TradeNova works.</p>
              <ul>
                <li>📊 View live stock prices (mocked)</li>
                <li>📝 Place buy/sell orders (UI only)</li>
                <li>📈 Watch market depth & charts</li>
              </ul>
              <p className="text-muted">
                No real transactions occur. This demo is for educational purposes only.
              </p>
            </div>
            <div className="modal-footer">
             
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
