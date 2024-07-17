import React from "react";
import "./Features.css";
import Vector from "./assets/Vector.png";
function Features() {
  return (
    <div className="container-Features">
      <div className="header">
        <div className="title">
          <span className="white-text">Our</span>
          <span className="highlight-text">Features</span>
        </div>
        <div className="description">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </div>
      </div>
      <div className="features-section">
        <div className="feature-buttons">
          <div className="feature-button highlight-bg">Online Banking</div>
          <div className="feature-button">Financial Tools</div>
          <div className="feature-button">Customer Support</div>
        </div>
        <div className="feature-details">
          <div className="detail-row">
            <div className="detail-box">
              <div className="detail-header">
                <div className="detail-title">24/7 Account Access</div>
                <div className="detail-icon">
                  <img src={Vector} alt="" />
                </div>
              </div>
              <div className="detail-description">
                Enjoy the convenience of accessing your accounts anytime,
                anywhere through our secure online banking platform. Check
                balances, transfer funds, and pay bills with ease.
              </div>
            </div>
            <div className="detail-box">
              <div className="detail-header">
                <div className="detail-title">Mobile Banking App</div>
                <div className="detail-icon">
                  <img src={Vector} alt="" />
                </div>
              </div>
              <div className="detail-description">
                Stay connected to your finances on the go with our user-friendly
                mobile banking app. Easily manage your accounts, deposit checks,
                and make payments from your smartphone or tablet.
              </div>
            </div>
          </div>
          <div className="detail-row">
            <div className="detail-box">
              <div className="detail-header">
                <div className="detail-title">Secure Transactions</div>
                <div className="detail-icon">
                  <img src={Vector} alt="" />
                </div>
              </div>
              <div className="detail-description">
                Rest assured knowing that your transactions are protected by
                industry-leading security measures. We employ encryption and
                multi-factor authentication to safeguard your financial
                information.
              </div>
            </div>
            <div className="detail-box">
              <div className="detail-header">
                <div className="detail-title">Bill Pay and Transfers</div>
                <div className="detail-icon">
                  <img src={Vector} alt="" />
                </div>
              </div>
              <div className="detail-description">
                Save time and avoid late fees with our convenient bill pay
                service. Set up recurring payments or make one-time transfers
                between your accounts with just a few clicks.
              </div>
            </div>
          </div>
        </div>
      </div>

          </div>
  );
}

export default Features;
