import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo + Copyright */}
          <div className="footer-col">
            <img
              src="/media/images/logo.svg"
              alt="logo"
              className="footer-logo"
            />
            <p className="footer-text">
              © 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/product">Products</Link>
            <Link to="/pricing">Pricing</Link>
            <a href="#">Referral programme</a>
            <a href="#">Careers</a>
            <a href="#">Zerodha.tech</a>
            <a href="#">Press & media</a>
            <a href="#">CSR</a>
          </div>

          {/* Support */}
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/support">Contact</Link>
            <Link to="/support">Support portal</Link>
            <a href="#">Z-Connect blog</a>
            <a href="#">Charges</a>
            <a href="#">Downloads</a>
          </div>

          {/* Account */}
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/signup">Open account</Link>
            <a href="#">Fund transfer</a>
            <a href="#">60 day challenge</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Zerodha Securities
            Pvt. Ltd.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile/email for alerts.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
