import React from "react";
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
} from "swiper/modules";

import hero from "../../assets/images/hero/home-hero.webp";
import bagImage from "../../assets/images/hero/bag.jpeg";
import agarbattiImage from "../../assets/images/hero/agarbatti.jpeg";
import OutlinedButton from "../common/OutlinedButton";

const slides = [
  {
    title: "Agarbatti Products",
    description:
      "This is a glassmorphism card with some content and a button below. Looks modern and clean!",
    image: agarbattiImage,
  },
  {
    title: "Bag Products",
    description:
      "This is a glassmorphism card with some content and a button below. Looks modern and clean!",
    image: bagImage,
  },
];

const SliderHero = () => {
  const isSingleSlide = slides.length === 1;

  return (
    <div className="px-2 sm:px-6 md:px-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
        speed={3000}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        // ✅ conditional behavior
        loop={!isSingleSlide}
        navigation={!isSingleSlide}
        pagination={
          !isSingleSlide ? { clickable: true, dynamicBullets: true } : false
        }
        autoplay={
          isSingleSlide ? false : { delay: 3000, disableOnInteraction: true }
        }
        keyboard={!isSingleSlide}
        className="rounded-[20px] sm:rounded-[30px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              className="h-[55vh] sm:h-[70vh] md:h-[85vh] w-full object-cover"
              src={slide.image}
              alt={slide.title}
            />

            <div className="absolute inset-0 flex justify-start items-center text-white">
              <div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

              <div className="z-10 p-5 sm:p-8 md:p-12 max-w-xl text-left">
                <h2 className="uppercase font-serif text-2xl sm:text-4xl md:text-6xl font-light mb-3 sm:mb-4 text-white tracking-wider sm:tracking-widest">
                  {slide.title}
                </h2>

                <p className="text-white/90 mb-6 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-sm">
                  {slide.description}
                </p>

                <OutlinedButton title="Explore" link={"/products"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHero;
