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
// import useAxiosInstance from "../../AxiosAPI/useAxiosInstance";

function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl">
        <Banar></Banar>
      </div>
      {/* <BannerSlider /> */}
      <SectionHeading>about the building</SectionHeading>

      <div className="grid grid-cols-1 p-4 md:grid-cols-3 md:gap-5">
        {/* {data.map((item) => (
          <FeatureSection feature={item} key={item._id}></FeatureSection>
        ))} */}
        <FeatureSection></FeatureSection>
        <FeatureSection></FeatureSection>
        <FeatureSection></FeatureSection>
      </div>
      <FreqQusSection></FreqQusSection>
    </div>
  );
}

export default Home;
