import React from "react";
import OutlinedButton from "../common/OutlinedButton";
import BrandHeading from "../common/BrandHeading";

const AboutSection = () => {
  return (
    <div className="text-center px-4 sm:px-6 ">
      <BrandHeading />
      <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-extralight pt-3 sm:pt-5 text-gray-900 tracking-wider">
        About Us
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto mt-3 sm:mt-4">
        The name Geffron represents growth, fragrance, strength, and spiritual
        harmony. It is a unique brand identity created to symbolize reliability,
        purity, and positive energy.
      </p>
      <div className="mt-3 sm:mt-4">
        <OutlinedButton title={"Read More"} link={'/about'} />
      </div>
    </div>
  );
};

export default AboutSection;
