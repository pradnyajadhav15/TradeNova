import React from 'react';

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={imageUrl}
            alt={productName || 'Product'}
            className="img-fluid"
            style={{ maxHeight: '360px', objectFit: 'contain' }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">
          <h2 className="fw-bold">{productName}</h2>
          <p className="mt-3 text-muted">{productDescription}</p>

          {/* Modal Triggers */}
          <div className="mt-4">
            <button className="btn btn-link me-3" data-bs-toggle="modal" data-bs-target="#tryDemoModal">
              Try Demo
            </button>
            <button className="btn btn-link" data-bs-toggle="modal" data-bs-target="#learnMoreModal">
              Learn More
            </button>
          </div>

          {/* App Download Badges */}
          <div className="mt-4 d-flex gap-3 flex-wrap">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Download on Google Play"
                width="120"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on App Store"
                width="120"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Try Demo Modal */}
      <div className="modal fade" id="tryDemoModal" tabIndex="-1" aria-labelledby="tryDemoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tryDemoModalLabel">Try TradeNova Demo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Experience our intuitive dashboard, trading tools, and portfolio management interface in real-time:</p>
              <ul>
                <li>Live market preview</li>
                <li>Explore charting & order features</li>
                <li>No login required</li>
              </ul>
              <a href={tryDemo || "/demo"} className="btn btn-primary mt-3">Start Demo</a>
            </div>
          </div>
        </div>
      </div>
{/* Learn More Modal */}
<div className="modal fade" id="learnMoreModal" tabIndex="-1" aria-labelledby="learnMoreModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="learnMoreModalLabel">Learn More about TradeNova</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>TradeNova is a cutting-edge platform built for modern investors and traders:</p>
        <ul>
          <li><strong>Zero brokerage</strong> on equity delivery trades</li>
          <li><strong>Flat ₹20/trade</strong> for intraday and F&O, regardless of order size</li>
          <li><strong>Advanced charting tools</strong> powered by TradingView & ChartIQ</li>
          <li><strong>Real-time market watchlists</strong> with personalized insights</li>
          <li><strong>Mutual funds & bonds</strong> via integrated partner platforms</li>
          <li><strong>Powerful mobile & web apps</strong> for seamless trading anywhere</li>
          <li><strong>Secure & paperless onboarding</strong> in under 10 minutes</li>
          <li><strong>Dedicated support portal</strong> and in-app ticket creation</li>
        </ul>

        <hr className="my-3" />
        <h6 className="fw-bold text-primary">Kite by TradeNova</h6>
        <p className="mb-0">
  Kite is our lightning-fast, next-gen trading platform crafted for speed and simplicity. 
  With real-time market data, powerful charting tools, and a sleek, intuitive interface, 
  Kite delivers an unmatched trading experience—anytime, anywhere. Available seamlessly on both Android and iOS devices.
</p>

      </div>
    </div>
  </div>
</div>

   </div>
  );
}

export default LeftSection;
