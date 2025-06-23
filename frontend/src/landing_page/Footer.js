import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="container border-top mt-5 pt-5">
      <div className="row text-start">
        {/* Logo & Copyright */}
        <div className="col-md-3 mb-4">
          <Link className="navbar-brand mb-2 d-block" to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="20" fill="#E6F2FF" />
              <path d="M30 60L45 40L55 55L70 30" stroke="#1E90FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M70 30V50H50" stroke="#1E90FF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#1E90FF" }}>TradeNova</span>
          </Link>

          <p className="text-muted small">© 2025 TradeNova Technologies Pvt. Ltd. All rights reserved.</p>
        </div>

        {/* Account Links */}
        <div className="col-md-3 mb-4">
          <h6 className="fw-bold mb-3">Account</h6>
          <ul className="list-unstyled small">
            {[
              "Open demat account",
              "Minor demat account",
              "NRI demat account",
              "Commodity",
              "Dematerialisation",
              "Fund transfer",
              "MTF",
              "Referral program"
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-decoration-none text-muted d-block py-1">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div className="col-md-3 mb-4">
          <h6 className="fw-bold mb-3">Support</h6>
          <ul className="list-unstyled small">
            {[
              "Contact us",
              "Support portal",
              "How to file a complaint?",
              "Status of your complaints",
              "TradeNova Blog",
              "Circular"
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-decoration-none text-muted d-block py-1">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="col-md-3 mb-4">
          <h6 className="fw-bold mb-3">Company</h6>
          <ul className="list-unstyled small">
            {[
              "About",
              "Philosophy",
              "Press & Media",
              "Careers",
              "CSR Initiatives",
              "Tech at TradeNova",
              "Open source"
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="text-decoration-none text-muted d-block py-1">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Regulatory Note */}
      <div className="text-muted small mt-5" style={{ fontSize: "11px", lineHeight: "1.7" }}>
        <p>
          TradeNova Technologies Pvt. Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633.
          Depository participant services provided through NSDL/CDSL. Please read all related documents carefully before investing.
        </p>
        <p>
          Investments in the securities market are subject to market risks. Prevent unauthorized transactions – always verify orders and statements.
        </p>
        <p>
          KYC is mandatory. TradeNova does not offer stock tips or unsolicited trading services.
        </p>
        <p>
          For complaints write to <a href="mailto:support@tradenova.com">support@tradenova.com</a>. Read our <a href="#">disclosure documents</a> & <a href="#">terms of service</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
