import React from "react";
import ProductDetail from "../components/products/ProductDetail";
import Standards from "../components/common/Standards";
import InquirySection from "../components/common/InquirySection ";
import TopProducts from "../components/home/TopProducts";

const SingleProduct = () => {
  return (
    <div className="overflow-x-hidden space-y-4">
      <ProductDetail />
      <TopProducts />
      <InquirySection />
      <Standards />
    </div>
  );
};

export default SingleProduct;
