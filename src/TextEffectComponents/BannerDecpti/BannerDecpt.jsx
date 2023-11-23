import React, { useEffect } from "react";
import gsap from "gsap";
import Textify from "textify.js";

function BannerDecpt({ text }) {
  useEffect(() => {
    // Use Textify.js to animate text
    new Textify(
      {
        el: ".large-animation-3",
        splitType: "lines",
        largeText: true,
        animation: {
          by: "lines",
          stagger: 0.1,
          duration: 0.7,
          ease: "expo.inOut",
          transformOrigin: "left top",
          animateProps: { y: "0", opacity: 0 },
        },
      },
      gsap
    );
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
      <p className="py-6 large-animation-3">{text}</p>
    </>
  );
}

export default BannerDecpt;
