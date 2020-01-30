import React from "react";
import LeftImg from "./frst.png";
import SecImg from "./secImg.png";
import Right from "./3rdImg.png";
import "./Footer/../Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="ft">
        <img src={LeftImg} alt={LeftImg} />
        <div>
          <h5>100,000 online course</h5>
          <p>Explore a variety of fresh topics</p>
        </div>
      </div>
      <div className="ft">
        <img src={SecImg} alt={SecImg} />
        <div>
          <h5>Expert instruction</h5>
          <p>Find the right instructor for you</p>
        </div>
      </div>
      <div className="ft">
        <img src={Right} alt={Right} />
        <div>
          <h5>Lifetime access</h5>
          <p>Learn on your schedule</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
