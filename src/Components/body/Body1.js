import React from "react";
import img from "../images/BOX.png";
import Marker from "../images/Marker.png";

const Body1 = () => {
  return (
    <div className="body1">
      <div className="b1">
        <div className="b2">Look good without leaving your house.</div>
        <div className="b13">
          Upbox is the easiest way to look your best without having to hunt for
          the perfect makeup combination. Our stylists curate the latest trends
          and send them directly to your door every month.
        </div>
        <div className="b14">SIGN UP {">"}</div>
      </div>
      <div className="b15"><img src={img} alt="" /></div>
      <div className="marker1"><img src={Marker} alt="" /></div>
    </div>
  );
};

export default Body1;