import { useQuery } from "@tanstack/react-query";
import Banar from "./Banar/Banar";
import FeatureSection from "./Feature/FeatureSection";
import axiosInstance from "../../AxiosAPI/axiosInstance";
import CustomLoading from "../../Components/CustomLoading";
import FreqQusSection from "./FreqQusSection/FreqQusSection";
import SectionDividerWithText from "../../Components/SectionDividerWithText";
import useAuthProvider from "../../FireBase/useAuthProvider";
import BannerSlider from "../../Components/Home/BannerSlider/BannerSlider";
import SectionTitle from "../../TextEffectComponents/BannerDecpt/SectionTitle/SectionTitle";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import AboutBuilding from "./AboutBuilding/AboutBuilding";
import Coupon from "../../Components/Home/Coupon/Coupon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FindUs from "./FindUs/FindUs";
// import useAxiosInstance from "../../AxiosAPI/useAxiosInstance";
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
