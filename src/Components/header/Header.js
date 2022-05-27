import React from "react";
import logo from "../images/Logo_Footer.png";
import topbar from "../images/TOPBAR 1.png";
import "../css/Background.css";

const Header = () => {
  return (
    <div className="header">
      <div className="h1"><img src={topbar} alt="" /></div><br />
      <div className="h2">
        <div className="h3"><img src={logo} alt="" /></div>
        <label htmlFor="check" className="check1"><i className="fas fa-bars thicon"></i></label>
        <input type="checkbox" id="check" />
        <div className="h4">
          <div>THIS MONTH</div>
          <div>SKIN</div>
          <div>HAIR</div>
          <div>BATH</div>
          <div>SALE</div>
          <div className="login">LOG IN {">"}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;