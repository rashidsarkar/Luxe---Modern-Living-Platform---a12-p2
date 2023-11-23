import { useQuery } from "@tanstack/react-query";
import Banar from "./Banar/Banar";
import FeatureSection from "./Feature/FeatureSection";
import axiosInstance from "../../AxiosAPI/axiosInstance";
import CustomLoading from "../../Components/CustomLoading";
import FreqQusSection from "./FreqQusSection/FreqQusSection";
import SectionDividerWithText from "../../Components/SectionDividerWithText";
import useAuthProvider from "../../FireBase/useAuthProvider";
import BannerSlider from "../../Components/Home/BannerSlider/BannerSlider";
// import useAxiosInstance from "../../AxiosAPI/useAxiosInstance";

function Home() {
  return (
    <div className="min-h-screen">
      <Banar></Banar>
      {/* <BannerSlider /> */}
      <SectionDividerWithText
        title="Featured Section"
        description="Discover our amazing features and services."
      />

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
