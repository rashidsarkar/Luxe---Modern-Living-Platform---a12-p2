import Banar from "./Banar/Banar";

import SectionTitle from "../../TextEffectComponents/BannerDecpt/SectionTitle/SectionTitle";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import AboutBuilding from "./AboutBuilding/AboutBuilding";
import Coupon from "../../Components/Home/Coupon/Coupon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FindUs from "./FindUs/FindUs";

AOS.init();
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for each Coupon component
    AOS.refresh();
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl">
        <Banar></Banar>
      </div>

      <SectionHeading>about the building</SectionHeading>
      <AboutBuilding></AboutBuilding>
      <SectionTitle>Latest Coupon Codes and Deals</SectionTitle>
      <div className="grid grid-cols-1 gap-6 overflow-x-hidden overflow-y-hidden lg:grid-cols-3">
        {/* //TODO - Coupon part api teke ante hobe */}
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
        <Coupon />
      </div>
      <SectionHeading>Find us</SectionHeading>

      <FindUs />
      {/* <Coupon /> */}
    </div>
  );
}

export default Home;
