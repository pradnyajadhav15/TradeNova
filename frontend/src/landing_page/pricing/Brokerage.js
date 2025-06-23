import React from 'react';

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        {/* Left Content */}
        <div className="col-md-8 p-4">
          <h2 className="fs-5 fw-bold mb-4">Charges Explained</h2>

          <section className="mb-4">
            <h5>Securities/Commodities Transaction Tax (STT/CTT)</h5>
            <p className="text-muted">
              Tax by the government when transacting on exchanges. Charged on both buy and sell sides for equity delivery; only on selling side for intraday or F&O.
              <br />
              At Zerodha, STT/CTT can often exceed brokerage. Keep an eye on this.
            </p>
          </section>

          <section className="mb-4">
            <h5>Transaction/Turnover Charges</h5>
            <ul className="text-muted">
              <li>BSE: ₹10,000 per crore for group X (XC/XD/XT/Z/ZP)</li>
              <li>BSE: ₹1,00,000 per crore for SS and ST groups</li>
              <li>Group A, B, etc.: ₹375 per crore (flat rate)</li>
              <li>Group M, MT, TS, MS: ₹275 per crore</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5>Call & Trade</h5>
            <p className="text-muted">₹50 per order placed through a dealer at Zerodha (including auto square-off).</p>
          </section>

          <section className="mb-4">
            <h5>Stamp Charges</h5>
            <p className="text-muted">Government levied under the Indian Stamp Act, 1899.</p>
          </section>

          <section className="mb-4">
            <h5>NRI Brokerage Charges</h5>
            <ul className="text-muted">
              <li>F&O: ₹100 per order</li>
              <li>Non-PIS account: 0.5% or ₹100 (whichever is lower)</li>
              <li>PIS account: 0.5% or ₹200 (whichever is lower)</li>
              <li>AMC: ₹500 + GST annually</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5>Account with Debit Balance</h5>
            <p className="text-muted">Orders charged ₹40/executed order instead of ₹20.</p>
          </section>

          <section className="mb-4">
            <h5>Investor Protection Fund Trust (IPFT) – NSE</h5>
            <ul className="text-muted">
              <li>Equity & Futures: ₹10/crore + GST</li>
              <li>Options: ₹50/crore + GST</li>
              <li>Currency: ₹0.05/lakh (Futures), ₹2/lakh (Options)</li>
            </ul>
          </section>

          <section className="mb-4">
            <h5>Margin Trading Facility (MTF)</h5>
            <ul className="text-muted">
              <li>Interest: 0.04% per day</li>
              <li>Brokerage: 0.3% or ₹20 (whichever is lower)</li>
              <li>Pledge/Unpledge: ₹15 + GST per ISIN</li>
            </ul>
          </section>
        </div>

        {/* Right Content */}
        <div className="col-md-4 p-4 border-start">
          <section className="mb-4">
            <h5>GST</h5>
            <p className="text-muted">18% on (brokerage + SEBI + transaction charges).</p>
          </section>

          <section className="mb-4">
            <h5>SEBI Charges</h5>
            <p className="text-muted">₹10/crore + GST by SEBI.</p>
          </section>

          <section className="mb-4">
            <h5>DP Charges</h5>
            <p className="text-muted">
              ₹15.34 per scrip (includes CDSL, Zerodha, and GST).
              <br />
              Discounts for female account holders and MF/bonds.
            </p>
          </section>

          <section className="mb-4">
            <h5>Pledging Charges</h5>
            <p className="text-muted">₹30 + GST per ISIN pledge request.</p>
          </section>

          <section className="mb-4">
            <h5>AMC (Account Maintenance)</h5>
            <p className="text-muted">
              <strong>BSDA:</strong> Free if holdings &lt; ₹4,00,000<br />
              <strong>Non-BSDA:</strong> ₹300/year + GST (charged quarterly)
            </p>
          </section>

          <section className="mb-4">
            <h5>Corporate Action Orders</h5>
            <p className="text-muted">₹20 + GST per OFS/buyback order via Console.</p>
          </section>

          <section className="mb-4">
            <h5>Off-market Transfers</h5>
            <p className="text-muted">₹25 per transaction.</p>
          </section>

          <section className="mb-4">
            <h5>CMR Request (Physical)</h5>
            <p className="text-muted">
              First request free. ₹20 + ₹100 courier + GST for others.
            </p>
          </section>

          <section className="mb-4">
            <h5>Payment Gateway</h5>
            <p className="text-muted">₹9 + GST (not for UPI transfers).</p>
          </section>

          <section className="mb-4">
            <h5>Delayed Payment Charges</h5>
            <p className="text-muted">18% annually (0.05% daily) on debit balances.</p>
          </section>

          <section className="mb-4">
            <h5>3-in-1 Account Charges</h5>
            <p className="text-muted">
              <strong>Delivery & MTF:</strong> 0.5%/executed order<br />
              <strong>Intraday:</strong> 0.05%/executed order
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
