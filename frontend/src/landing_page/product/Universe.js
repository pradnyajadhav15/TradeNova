import React from 'react';

const partners = [
  {
    name: 'Zerodha Fund House',
    logo: 'media/images/zerodhaFundhouse.png',
    description:
      'Our asset management venture that is creating simple and transparent index funds to help you save for your goals.',
  },
  {
    name: 'SENSIBULL',
    logo: 'media/images/sensibullLogo.svg',
    description:
      'Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.',
  },
  {
    name: 'Streak',
    logo: 'media/images/streakLogo.png',
    description:
      'Systematic trading platform that allows you to create and backtest strategies without coding.',
  },
  {
    name: 'smallcase',
    logo: 'media/images/smallcaseLogo.png',
    description:
      'Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.',
  },
  {
    name: 'ditto',
    logo: 'media/images/dittoLogo.png',
    description:
      'Personalized advice on life and health insurance. No spam and no mis-selling.',
  },
];

function Universe() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-12">
          <h1 className="fw-bold">The TradeNova Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        {partners.map((partner, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div className="p-3 h-100 border rounded shadow-sm text-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid mb-3"
                style={{ maxHeight: '50px' }}
              />
              <p className="text-muted small">{partner.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universe;
