import React from 'react';

function Education() {
  return (
    <div className="container my-5 py-4">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Stock Market Education"
            className="img-fluid"
            style={{ maxHeight: '400px' }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 px-4">
          <h2 className="fw-bold mb-3" style={{ fontSize: '2rem' }}>
            Free and Open Market Education 
          </h2>

          <p className="text-muted mb-3" style={{ fontSize: '1.05rem' }}>
            <strong>Varsity</strong>, the world’s largest online stock market education platform, covers everything from the basics to advanced trading concepts.
          </p>
          <a
            href="#"
            className="text-decoration-none text-primary fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#varsityModal"
          >
            Explore Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <p className="text-muted mt-4 mb-3" style={{ fontSize: '1.05rem' }}>
            <strong>TradingQ&A</strong>, India’s most active trading and investment community — ask, learn, and discuss everything markets!
          </p>
          <a
            href="#"
            className="text-decoration-none text-primary fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#tradingModal"
          >
            Visit TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
      </div>

      {/* Varsity Modal */}
      <div className="modal fade" id="varsityModal" tabIndex="-1" aria-labelledby="varsityModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="varsityModalLabel">Explore Varsity</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <p className="text-muted mb-3" style={{ fontSize: '1.05rem' }}>
  <strong>Varsity</strong> is the world’s largest free online stock market education platform built by TradeNova.
  It offers structured and beginner-friendly modules covering everything from the basics of stock markets
  to advanced topics like technical analysis, derivatives, options trading, risk management, and portfolio theory.
  <br /><br />
  Each module is organized like a textbook — concise, visual, and easy to understand — with quizzes to help test your learning.
  Whether you are a complete beginner or a trader looking to improve your strategies, Varsity provides the tools
  to build strong financial knowledge at your own pace, completely free of charge.
</p>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* TradingQ&A Modal */}
      <div className="modal fade" id="tradingModal" tabIndex="-1" aria-labelledby="tradingModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tradingModalLabel">Visit TradingQ&A</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
             <p className="text-muted mt-4 mb-3" style={{ fontSize: '1.05rem' }}>
  <strong>TradingQ&amp;A</strong> is one of India’s most active forums for traders and investors, created by TradeNova.
  It’s a vibrant community where people from all backgrounds come together to ask questions,
  share market insights, and discuss trading strategies in real-time.
  <br /><br />
  From absolute beginners to seasoned professionals, users engage in topics like stock analysis,
  futures &amp; options, IPOs, taxation, regulations, and everything in between.
  You’ll also find expert responses from industry veterans and Zerodha’s support team.
  It's a go-to platform to stay updated, get doubts cleared, and learn from real experiences shared by thousands.
</p>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Education;
