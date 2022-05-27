import React from "react";
import underline from "../images/underline.png";
import image1 from "../images/pho.png";
import image2 from "../images/box2 1.png";
import image3 from "../images/pho2.png";
import icon1 from "../images/art1.png";
import icon2 from "../images/art2.png";
import icon3 from "../images/art3.png";
import marker from "../images/Vector3.png";

const Body3 = () => {
  return (
    <div>
      <div>
        <h1>How it Works?</h1>
        <img src={underline} alt="underline" className="underline1" />
      </div>
      <div className="body3">
        <div className="b359">
          <div className="b3i1"><img src={image1} alt="" /></div>
          <div className="b31">Setup your profile & preferences</div>
          <div className="b32">Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</div>
          <div className="b3ic1"><img src={icon1} alt="" /></div>
          <div className="no1">1</div>
        </div>
        <div>
          <div className="b3i2"><img src={image2} alt="" /></div>
          <div className="b33">Review your custom box</div>
          <div className="b34">Once we get to know you, we will show you the box we've crafted.This is your chance to approve it before we ship it to your house.</div>
          <div className="b3ic2"><img src={icon2} alt="" /></div>
          <div className="b3mar"><img src={marker} alt="" /></div>
          <div className="no2">2</div>
        </div>
        <div>
          <div className="b3i3"><img src={image3} alt="" /></div>
          <div className="b35">Try it on at home</div>
          <div className="b36">
            Your box will arrive within 3-5 days (usually sooner) and you get
            the joy to unbox your Upbox. Try it all on and send back whatever
            you're not in love with.
          </div>
          <div className="b3ic3"><img src={icon3} alt="" /></div>
          <div className="no3">3</div>
        </div>
        <div className="b37">TRY IT FOR YOURSELF {">"}</div>
      </div>
    </div>
  );
};

export default Body3;