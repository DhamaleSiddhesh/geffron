import React from "react";
import OutlinedButton from "../common/OutlinedButton";

const AboutSection = () => {
  return (
    <div className="text-center">
      <p className="font-bold uppercase text-2xl">Geffron </p>
      <p className="pb-5">
        Inspired by Craft, Quality, and Growth Innovating. Empowering.
        Delivering Excellence.
      </p>
      <h1 className="text-8xl uppercase font-extralight">About Us </h1>
      <span className="block max-w-lg mx-auto mt-4">
        The name Geffron represents growth, fragrance, strength, and spiritual
        harmony. It is a unique brand identity created to symbolize reliability,
        purity, and positive energy.
      </span>
      <div className="mt-15">
        <OutlinedButton title={"Explore More"} />
      </div>
    </div>
  );
};

export default AboutSection;
