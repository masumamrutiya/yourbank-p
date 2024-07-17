import React from "react";
import "./Navber.css";
import logo from './assets/Logo.png'
function Navber() {
  return (
    <>
    <div className="Navber-1">
      <div className="navbar">
        <div className="logo-section">
          <div className="logo-icon">
            <div className="icon-bg-n"><img src={logo} alt="" /></div>
          </div>
          <div className="logo-text"></div>
        </div>
        <div className="menu-items">
          <div className="menu-item home">
            <div className="menu-item-text">Home</div>
          </div>
          <div className="menu-item">Careers</div>
          <div className="menu-item">About</div>
          <div className="menu-item">Security</div>
        </div>
        <div className="auth-buttons">
          <div className="sign-up">Sign Up</div>
          <div className="login-button">
            <div className="login-text">Login</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Navber;
