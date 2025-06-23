import React from 'react';
import { FaRocket, FaBookOpen, FaChartLine } from 'react-icons/fa';

function Hero() {
  return (
    <div className="hero-container py-5 px-3">
      <div className="text-center mb-5">
        <h1 className="hero-title">
          Empowering the Next Generation of Investors
        </h1>
        <p className="hero-subtitle">
          TradeNova offers intelligent tools, low-cost investing, and insights built for you.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="hero-card p-4 shadow-sm">
            <FaRocket className="hero-icon mb-3" />
            <h5>AI-Powered Tools</h5>
            <p>Make smarter trades with AI-backed insights, alerts, and analytics in real time.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero-card p-4 shadow-sm">
            <FaBookOpen className="hero-icon mb-3" />
            <h5>Learn & Grow</h5>
            <p>Access beginner to advanced content. Our academy helps you grow confidently.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero-card p-4 shadow-sm">
            <FaChartLine className="hero-icon mb-3" />
            <h5>Transparent Pricing</h5>
            <p>No hidden fees. TradeNova gives you complete clarity with low-cost investing.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
