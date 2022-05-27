import React from "react";
import underline from "../images/underline.png";
import background1 from "../images/Vector-1.png";
import background2 from "../images/Vector.png";

const Body2 = () => {
  return (
    <div className="body2">
      <div className="b21">
        <h1>Pick your plan</h1>
        <img src={underline} alt="underline" className="underline" />
        <div className="b22">
          <div className="b23">
            <div className="b24"><span>Monthly</span>
              <div style={{ fontSize: "35px" }}>$18/mo</div>
              <div className="b231">FIND YOUR BOX</div>
            </div>
            <div className="b2img"><img src={background1} alt="" className="bg" /></div>
          </div>
          <div className="b23">
            <div className="b24 b241">
              <span>Yearly</span>
              <div style={{ fontSize: "35px" }}>$15/mo</div>
              <div className="b231">FIND YOUR BOX</div>
            </div>
            <div className="b2img"><img src={background2} alt="" /></div>
          </div>
        </div>
        <div className="b25">Your plan auto-renews at the end of 30 days from the 1st day you signed-up.</div>
      </div>
    </div>
  );
};

export default Body2;