import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import TabButton from "../common/TabButton";

import juteProduct from "../../assets/images/product/jute-product.webp";
import agarbattiProduct from "../../assets/images/product/agarbatti-product.webp";
// import mogaraEssence from "../../assets/images/product/mogara-essence.png";
// import namoNamah from "../../assets/images/product/namo-namah.png";
// import oudhSwarna from "../../assets/images/product/oudh-swarna.png";
// import walaSerenity from "../../assets/images/product/wala-serenity.png";
// import anantChandan from "../../assets/images/product/anant-chandan.png";
// import goldenCrown from "../../assets/images/product/golden-crown.png";
// import haritPanadi from "../../assets/images/product/harit-panadi.png";
// import lobanAuraCamphor from "../../assets/images/product/loban-aura-camphor.png";

import { products } from "../../data/database";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";

import ProductCard from "../common/ProductCard";

// FALLBACK PRODUCTS
const defaultProducts = [
  {
    id: 1,
    mainImage: juteProduct,
    name: "Bag Large",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bags",
  },
  {
    id: 2,
    mainImage: juteProduct,
    name: "Bag Small",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Bags",
  },
  {
    id: 3,
    mainImage: agarbattiProduct,
    name: "Agarbatti Lavender",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Agarbatti",
  },
  {
    id: 4,
    mainImage: agarbattiProduct,
    name: "Agarbatti Sandalwood",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Agarbatti",
  },
];

const TopProducts = ({
  title = "Our Top Products",
  // products = [],
  bestSeller = false,
  topProducts = true,
}) => {
  const [activeTab, setActiveTab] = useState("Agarbatti");

  // Use API/data products if available otherwise fallback

  const categories = ["Agarbatti", "Bags"];
 console.log("helooooooooo" , products)
  // Dynamic filtering
  let displayProducts = products.filter((product) => {
    console.log("checking ")
    if (bestSeller) {
      console.log("best seller products ")
      return (
        product.status === "active" && product.isBestSellerProduct === true
      );
    }

    if (topProducts) {
      return product.status === "active" && product.isTopProduct === true;
    }

    return false;
  });

  // fallback
  if (displayProducts.length === 0) {
    displayProducts = defaultProducts;
  }

  const filteredProducts = displayProducts.filter((product) => {
    if (product.category) {
      return product.category === activeTab;
    }

    if (activeTab === "Bags") {
      return product.categoryId === "cat_2";
    }

    if (activeTab === "Agarbatti") {
      return product.categoryId === "cat_1";
    }

    return false;
  });

  return (
    <>
      <SectionHeading title={title} />

      {/* Tabs */}
      <div className="flex justify-center gap-5 py-10">
        {categories.map((category) => (
          <TabButton
            key={category}
            title={category}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </div>

      {/* Products */}
      <div className="mx-auto max-w-7xl px-4">
        {filteredProducts.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Keyboard]}
            slidesPerView={4}
            spaceBetween={20}
            loop={false}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },

              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className="topProductSlider"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center py-10 text-gray-500">
            No products available.
          </div>
        )}
      </div>
    </>
  );
};

export default TopProducts;
