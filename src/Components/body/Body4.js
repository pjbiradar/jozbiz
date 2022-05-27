import React from "react";
import image1 from "../images/img1.png";
import image2 from "../images/img2.png";
import image3 from "../images/img3.png";
import image4 from "../images/img4.png";
import marker from "../images/squig2.png";

const Body4 = () => {
  return (
    <div className="body4">
      <h1>Social Posts</h1>
      <div className="b41">
        <div>
          <div><img src={image1} alt="" /></div>
          <div className="b42">How to rock the lip look that turns heads</div>
        </div>
        <div>
          <div><img src={image2} alt="" /></div>
          <div className="b42">Find the perfect shade for the season</div>
        </div>
        <div>
          <div><img src={image3} alt="" /></div>
          <div className="b42">The 5 eye shadow secrets you never knew</div>
        </div>
        <div>
          <div><img src={image4} alt="" /> </div>
          <div className="b42">The pro-tips for at home hair dying</div>
        </div>
      </div>
      <div className="b4marker"><img src={marker} alt="" /></div>
      <div className="b43">FOLLOW US ON INSTAGRAM</div>
    </div>
  );
};

export default Body4;