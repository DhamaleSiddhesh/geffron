import React from "react";
import ProductDetail from "../components/products/ProductDetail";
import Standards from "../components/common/Standards";
import InquirySection from "../components/common/InquirySection ";
import TopProducts from "../components/home/TopProducts";

const SingleProduct = () => {
  return (
    <>
      <ProductDetail />
      <div className="py-15">
        <TopProducts />
      </div>
      <InquirySection />
      <Standards />
    </>
  );
};

export default SingleProduct;
