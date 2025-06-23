import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom sticky-top" style={{ backgroundColor: "#fff", zIndex: 1000 }}>
      <div className="container">

        {/* TradeNova Logo */}
      
  <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
  <svg
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" rx="20" fill="#E6F2FF"/>
    <path d="M30 60L45 40L55 55L70 30" stroke="#1E90FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M70 30V50H50" stroke="#1E90FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  <span style={{ fontSize: "24px", fontWeight: "bold", color: "#1E90FF" }}>TradeNova</span>
</Link>


        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            {[
              { to: "/signup", label: "Signup" },
              { to: "/about", label: "About" },
              { to: "/product", label: "Product" },
              { to: "/pricing", label: "Pricing" },
              { to: "/support", label: "Support" }
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  className={`nav-link fw-semibold ${isActive(to) ? 'text-primary' : 'text-dark'}`}
                  to={to}
                  aria-current={isActive(to) ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
