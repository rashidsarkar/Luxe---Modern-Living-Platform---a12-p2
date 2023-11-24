import { useEffect } from "react";

import "./Coupon.css";

const Coupon = () => {
  return (
    <div className="containerr" data-aos="flip-left">
      <div className="coupon-card">
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/qnfmDWY/logo.png"
            alt="Coupon Logo"
            className="text-center logo"
          />
        </div>
        <h3>
          20% flat off on all rides within the city using HDFC Credit Card
        </h3>
        <div className="coupon-row">
          <span className="cpnCode" id="cpnCode">
            STEALDEAL20
          </span>
          <span className="cpnBtn" id="cpnBtn">
            Copy
          </span>
        </div>
        {/* <p>Valid Till: 20 Dec, 2021</p> */}
        <div className=" circle1"></div>
        <div className="circle2"></div>
      </div>
    </div>
  );
};

export default Coupon;
