import React, { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import OutlinedButton from "../common/OutlinedButton";
import TabButton from "../common/TabButton";
import juteProduct from "../../assets/images/product/jute-product.webp";
import agarbattiProduct from "../../assets/images/product/agarbatti-product.webp";
import AnimatedButton from "../common/AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  EffectFade,
  FreeMode,
} from "swiper/modules";

const products = [
  {
    id: 1,
    image: juteProduct,
    name: "Bag Large",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 2,
    image: juteProduct,
    name: "Bag Small",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 3,
    image: juteProduct,
    name: "Bag Large",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 4,
    image: juteProduct,
    name: "Bag Small",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 5,
    image: juteProduct,
    name: "Bag Large",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 6,
    image: juteProduct,
    name: "Bag Small",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 7,
    image: agarbattiProduct,
    name: "Agarbatti Lavender",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Agarbatti",
  },
  {
    id: 8,
    image: agarbattiProduct,
    name: "Agarbatti Sandalwood",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Agarbatti",
  },
];

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 4,
//   spaceBetween: 26,
//   snapToSlideEdge: true,
//   roundLengths: true,
//   loop: true,
//   freeMode: {
//     enabled: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
//   autoplay: {
//     disableOnInteraction: true,
//     pauseOnMouseEnter: true,
//   },
// });

const TopProducts = () => {
  const [activeTab, setActiveTab] = useState("Bags");
  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter(
    (product) => product.category === activeTab,
  );

  return (
    <>
      <SectionHeading title={"Our Top Products"} />
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
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          slidesPerView={4}
          spaceBetween={20}
          loop={false}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="topProductSlider"
        >
          {filteredProducts.map((product) => (
            <SwiperSlide
              key={product.id}
              //   className="card rounded-xl text-center shadow-2xl hover:shadow-lg transition"
            >
              <div className="rounded-xl overflow-hidden  hover:shadow-lg transition bg-white">
                <img
                  className="w-full h-auto object-cover"
                  src={product.image}
                  alt={product.name}
                />

                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{product.name}</h3>

                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {product.desicription}
                  </p>

                  <AnimatedButton title="Explore" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopProducts;
