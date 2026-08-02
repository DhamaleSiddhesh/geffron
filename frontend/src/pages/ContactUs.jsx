import React from "react";
import DirectConnect from "../components/contact/DirectConnect";
import Standards from "../components/common/Standards";
import SliderHero from "../components/home/SliderHero";

const ContactUs = () => {
  return (
    <div className="overflow-x-hidden space-y-8 sm:space-y-12 md:space-y-16">
      <SliderHero />
      <DirectConnect />
      <Standards />
    </div>
  );
};

export default ContactUs;
