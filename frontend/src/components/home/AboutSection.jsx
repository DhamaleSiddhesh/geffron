import React from "react";
import OutlinedButton from "../common/OutlinedButton";
import BrandHeading from "../common/BrandHeading";

const AboutSection = () => {
  return (
    <div className="text-center">
      <BrandHeading />
      <h1 className="text-8xl uppercase font-extralight">About Us </h1>
      <span className="block max-w-lg mx-auto mt-4">
        The name Geffron represents growth, fragrance, strength, and spiritual
        harmony. It is a unique brand identity created to symbolize reliability,
        purity, and positive energy.
      </span>
      <div className="mt-15">
        <OutlinedButton title={"Read More"} link={'/about'}/>
      </div>
    </div>
  );
};

export default AboutSection;
