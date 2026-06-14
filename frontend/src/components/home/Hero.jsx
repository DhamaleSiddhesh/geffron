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
  FreeMode,
} from "swiper/modules";

import hero from "../../assets/images/hero/home-hero.webp";
import OutlinedButton from "../common/OutlinedButton";

const slides = [
  {
    title: "Bag Products",
    description:
      "This is a glassmorphism card with some content and a button below. Looks modern and clean!",
    image: hero,
  },
  {
    title: "Agarbatti Products",
    description:
      "This is a glassmorphism card with some content and a button below. Looks modern and clean!",
    image: hero,
  },
  // {
  //   title: "Eco Bags",
  //   description:
  //     "Another amazing product card description here for your slides!",
  //   image: hero,
  // },
];

const Hero = () => {
  return (
    <div className="px-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade, FreeMode]}
        speed={1000}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        freeMode={{ enabled: true }}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        keyboard={true}
        className="rounded-[50px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              className="h-screen w-full object-cover rounded-[50px]"
              src={slide.image}
              alt={slide.title}
            />
            <div className="absolute inset-0 flex justify-center items-center text-center text-white">
              <div className="bg-white/10 backdrop-blur-sm border border-white rounded-xl p-15 max-w-xl shadow-lg">
                <h2 className="text-2xl md:text-8xl font-extralight mb-4 text-black tracking-widest">{slide.title}</h2>
                <p className="text-black/80 mb-6">{slide.description}</p>
                <OutlinedButton title="Explore" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;