import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="container text-center py-5">
      {/* Hero Image */}
      <img 
        src="media/images/homeHero.png" 
        alt="Hero Illustration" 
        className="img-fluid mb-4"
        style={{ maxHeight: '400px' }} 
      />

      {/* Hero Text */}
      <h1 className="fw-bold mb-3" style={{ fontSize: '2.8rem' }}>
        Invest in Everything 
      </h1>
      <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
        An all-in-one online platform to invest in stocks, derivatives, mutual funds, and more!
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

export default Hero;
