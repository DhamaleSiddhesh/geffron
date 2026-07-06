import React from "react";
import AboutSection from "../components/home/AboutSection";
import BrandHeading from "../components/common/BrandHeading";
import WelcomeSection from "../components/about/WelcomeSection";
import GeffronMeaning from "../components/about/GeffronMeaning";
import WhyChooseGeffron from "../components/home/WhyChooseGeffron";
import VisionMission from "../components/about/VisionMission";
import Values from "../components/about/Values";
import InquirySection from "../components/common/InquirySection ";
import Standards from "../components/common/Standards";
import SliderHero from "../components/home/SliderHero";
import TopProducts from "../components/home/TopProducts";

const About = () => {
  return (
    <div>
      <SliderHero />
      <BrandHeading />
      <WelcomeSection />
      {/* <div className="md:py-15"> */}
      <GeffronMeaning />
      {/* </div> */}
      <VisionMission />
      <Values />
      {/* <WhyChooseGeffron /> */}
      <div className="pt-15">
        <TopProducts />
      </div>
      <div className="pt-15">
        <InquirySection />
      </div>
      <Standards />
    </div>
  );
};

export default About;
