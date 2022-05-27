import React from "react";
import logo from "../images/Logo_Footer.png";
import fb from "../images/fb.png";
import ig from "../images/ig.png";
import sc from "../images/sc.png";
import tw from "../images/tw.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f1">
        <div><img src={logo} alt="" className="logo" /></div>
        <div className="logos">
          <div><img src={ig} alt="" /></div>
          <div><img src={fb} alt="" /></div>
          <div><img src={tw} alt="" /></div>
          <div><img src={sc} alt="" /></div>
        </div>
      </div>
      <div className="box">
        <div className="f2">
          <div className="f21">UPBOX</div>
          <div>Upbox Bag</div>
          <div>Upbox Box Platinum</div>
          <div>Upbox Box VIP</div>
          <div>Deals</div>
          <div>Upbox Items</div>
          <div>Upbox Promise</div>
        </div>
        <div className="f3">
          <div className="f21">Find Us On</div>
          <div>Instagram</div>
          <div>Facebook</div>
          <div>TikTok</div>
          <div>SnapChat</div>
          <div>Twitter</div>
        </div>
        <div className="f4">
          <div className="f21">Product</div>
          <div>Get the App</div>
          <div>Loyalty Program</div>
          <div>Affiliates</div>
          <div>Press</div>
        </div>
        <div className="f5">
          <div className="f21">Help</div>
          <div>Returns</div>
          <div>FAQ</div>
          <div>Contact</div>
          <div>Community</div>
          <div>Videos</div>
        </div>
      </div>
      <hr />
      <div className="f6">
        <div className="ftext">Ⓒ2020 Quest Al. Upbox is a Sample Project and open source design project free for personal and commercial use.</div>
        <div className="fterms">Terms</div>
        <div className="fpolicy">Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;