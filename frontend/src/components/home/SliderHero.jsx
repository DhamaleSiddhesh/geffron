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
import OutlinedButton from "../common/OutlinedButton";

const slides = [
  {
    title: "Agarbatti Products",
    description:
      "This is a glassmorphism card with some content and a button below. Looks modern and clean!",
    image: hero,
  },
  {
    title: "Bag Products",
    description:
      "This is a glassmorphism card with some content and a button below. Looks modern and clean!",
    image: hero,
  },
];

const SliderHero = () => {
  const isSingleSlide = slides.length === 1;

  return (
    <div className="px-4 md:px-12">
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
        className="rounded-[30px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              className="h-[70vh] md:h-[85vh] w-full object-cover"
              src={slide.image}
              alt={slide.title}
            />

            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm border border-white rounded-xl p-6 md:p-10 max-w-xl shadow-lg">
                <h2 className="uppercase font-serif text-3xl md:text-6xl font-light mb-4 text-black tracking-widest">
                  {slide.title}
                </h2>

                <p className="text-black/80 mb-6 text-sm md:text-base">
                  {slide.description}
                </p>

                <OutlinedButton title="Explore" link={"/product"} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHero;
