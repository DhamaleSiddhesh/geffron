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
    <div className="overflow-x-hidden space-y-8 sm:space-y-8 md:space-y-10">
      <SliderHero />
      <Categories />
      <AboutSection />
      <WhyChooseGeffron />
      <TopProducts title={"Best seller products"} bestSeller />
      <InquirySection />
      <Standards />
    </div>
  );
};

export default Home;
