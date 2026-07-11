import React from "react";
import SliderHero from "../components/home/SliderHero";
import AboutSection from "../components/home/AboutSection";
import Categories from "../components/home/Categories";
import WhyChooseGeffron from "../components/home/WhyChooseGeffron";
import TopProducts from "../components/home/TopProducts";
import InquirySection from "../components/common/InquirySection ";
import Standards from "../components/common/Standards";

const Home = () => {
  return (
    <div>
      <SliderHero />
      <div className="py-15">
        <Categories />
      </div>
      <div className="pt-15">
        <AboutSection />
      </div>
      <div className="py-15">
        <WhyChooseGeffron />
      </div>
      <div className="py-15">
        <TopProducts title={"Best seller products"} bestSeller />
      </div>
      <InquirySection />
      <Standards />
    </div>
  );
};

export default Home;
