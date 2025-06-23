import React from 'react';
import {
  FaUserPlus,
  FaRupeeSign,
  FaUserCircle,
  FaChartBar,
  FaExchangeAlt,
  FaCoins
} from 'react-icons/fa';

function CreateTicket() {
  const ticketData = [
    {
      icon: <FaUserPlus size={22} className="text-primary" />,
      title: 'Account Opening',
      links: ['Resident individual', 'Minor', 'Non Resident Indian (NRI)', 'Company, Partnership, HUF and LLP', 'Glossary'],
    },
    {
      icon: <FaRupeeSign size={22} className="text-primary" />,
      title: 'Funds',
      links: ['Add money', 'Withdraw money', 'Add bank accounts', 'eMandates'],
    },
    {
      icon: <FaUserCircle size={22} className="text-primary" />,
      title: 'Your TradeNova Account',
      links: ['Your Profile', 'Account modification', 'Client Master Report (CMR) and DP', 'Nomination', 'Transfer and conversion of securities'],
    },
    {
      icon: <FaChartBar size={22} className="text-primary" />,
      title: 'Console',
      links: ['Portfolio', 'Corporate actions', 'Funds statement', 'Reports', 'Profile', 'Segments'],
    },
    {
      icon: <FaExchangeAlt size={22} className="text-primary" />,
      title: 'Kite',
      links: ['IPO', 'Trading FAQs', 'Margin Trading Facility (MTF) and Margins', 'Charts and orders', 'Alerts and Nudges', 'General'],
    },
    {
      icon: <FaCoins size={22} className="text-primary" />,
      title: 'Coin',
      links: ['Mutual funds', 'National Pension Scheme (NPS)', 'Features on Coin', 'Payments and Orders', 'General'],
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" style={{ fontSize: '1.8rem' }}>
        To create a ticket, select a relevant topic
      </h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {ticketData.map((section, index) => (
          <div className="col" key={index}>
            <div className="p-4 border rounded h-100 shadow-sm bg-white">
              <div className="d-flex align-items-center mb-3">
                {section.icon}
                <h5 className="ms-2 mb-0 fw-semibold">{section.title}</h5>
              </div>
              <ul className="list-unstyled mt-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-primary text-decoration-none d-block py-1"
                      style={{ fontSize: '0.95rem' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
