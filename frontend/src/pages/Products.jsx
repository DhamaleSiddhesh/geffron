import React from "react";
import SliderHero from "../components/home/SliderHero";
import ProductIntro from "../components/products/ProductIntro ";
import AllProducts from "../components/products/AllProducts";
import InquirySection from "../components/common/InquirySection ";
import Standards from "../components/common/Standards";

const Products = () => {
  return (
    <div>
      <SliderHero />
      <ProductIntro />
      <AllProducts />
      <InquirySection />
      <Standards />
    </div>
  );
};

export default Products;
