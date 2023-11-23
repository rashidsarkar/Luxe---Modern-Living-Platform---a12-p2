import { TypeAnimation } from "react-type-animation";
import BannerDecpt from "../../../TextEffectComponents/BannerDecpti/BannerDecpt";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./Banar.css";
function Banar() {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        {/* <img
          src="https://i.ibb.co/B2xHjNq/pexels-vitali-adutskevich-14073070.jpg"
          className="rounded-lg shadow-2xl lg:max-w-lg"
        /> */}
        <div className="rounded-lg shadow-2xl lg:max-w-lg">
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/B2xHjNq/pexels-vitali-adutskevich-14073070.jpg"
                className="rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/B2xHjNq/pexels-vitali-adutskevich-14073070.jpg"
                className="rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/B2xHjNq/pexels-vitali-adutskevich-14073070.jpg"
                className="rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/B2xHjNq/pexels-vitali-adutskevich-14073070.jpg"
                className="rounded-lg shadow-2xl lg:max-w-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Box Office News!",
              1000,
              "Box Office Update!",
              1000,
              "Box Office Dinner!",
              1000,
              "Box Office Hottet!",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "3rem", fontWeight: "700" }}
            repeat={Infinity}
          />
          <h1 className="text-5xl ">Box Office News!</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <BannerDecpt></BannerDecpt>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banar;
