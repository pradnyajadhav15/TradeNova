import React from 'react';

function Team() {
  return (
    <div className="container team-container py-5">
      {/* Header */}
      <div className="row justify-content-center border-top pt-4 mb-4">
        <div className="col-lg-8 text-center">
          <h1 className="fs-2 fw-bold">Meet the Team</h1>
          <p className="text-muted">The mind behind TradeNova</p>
        </div>
      </div>

      {/* Team Profile */}
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center text-muted fs-6">
          <h4 className="fw-semibold">Prachi S.J</h4>
          <h6 className="text-secondary mb-4">Founder & CEO</h6>
          <p>
            Prachi S.J founded TradeNova with the belief that investing should be simple, transparent, and inclusive.
            With a strong background in fintech and data-driven technologies, she has built TradeNova as a modern platform
            that empowers individuals to invest smarter — regardless of their background.
            <br /><br />
            Her mission is to remove the noise and complexity around trading by offering tools that are intuitive, intelligent,
            and accessible. She's passionate about financial education, startup mentorship, and building technology for good.
            <br /><br />
            <strong>Connect on:</strong>
            <br />
            <a
              href="https://www.linkedin.com/in/pradnya-jadhav-173199348/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="me-3 text-decoration-none text-primary"
            >
              <i className="fa-brands fa-linkedin me-1"></i> LinkedIn
            </a>

            <a
              href="https://www.instagram.com/pradnya_j24/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="me-3 text-decoration-none text-dark-blue"
            >
              <i className="fa-brands fa-instagram me-1"></i> Instagram
            </a>

            <a
              href="#"
              className="text-decoration-none text-info"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter me-1"></i> Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
