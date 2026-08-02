import React from "react";
import SectionHeading from "../common/SectionHeading";

const GeffronMeaning = () => {
  return (
    <section className="px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeading title={"About Geffron Name & Meaning"} />

      {/* Intro */}
      <p className="text-center max-w-4xl mx-auto tracking-wide sm:tracking-wider leading-relaxed font-light p-3 sm:p-5 text-gray-700 text-sm sm:text-base md:text-lg">
        The name <span className="brand-text font-medium text-[#7C2420]">Geffron</span> represents growth,
        fragrance, strength, and spiritual harmony. It is a unique brand identity created
        to symbolize reliability, purity, and positive energy.
      </p>

      {/* Main breakdown */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6 md:gap-8 p-6 sm:p-8 md:p-10 text-center md:text-left bg-gray-50/70 rounded-3xl border border-gray-200/80 my-6 shadow-sm">
        {/* GEF */}
        <div className="flex-1 space-y-2">
          <span className="font-bold text-xl sm:text-2xl text-[#7C2420] block">
            "GEF"
          </span>
          <span className="font-medium text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed block">
            Symbolizes growth, freshness, and life energy, reflecting the natural fragrance
            and purity of our agarbatti products that uplift the mind and spirit.
          </span>
        </div>

        {/* PLUS */}
        <div className="flex items-center justify-center text-2xl font-bold text-[#7C2420] py-1 md:py-0">
          +
        </div>

        {/* FRON */}
        <div className="flex-1 space-y-2">
          <span className="font-bold text-xl sm:text-2xl text-[#7C2420] block">
            "Fron"
          </span>
          <span className="font-medium text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed block">
            Represents strength, foundation, and structure, symbolizing the durability
            and reliability of our bags that support everyday needs.
          </span>
        </div>

        {/* EQUAL */}
        <div className="flex items-center justify-center text-2xl font-bold text-[#7C2420] py-1 md:py-0">
          =
        </div>

        {/* Spiritual */}
        <div className="flex-1 space-y-2">
          <span className="font-bold text-xl sm:text-2xl text-[#7C2420] block">
            Spiritual Meaning:
          </span>
          <span className="font-medium text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed block">
            Geffron also represents peace, positivity, and spiritual balance. Fragrance
            is traditionally used in prayers, meditation, and sacred rituals to create
            a divine atmosphere.
          </span>
        </div>
      </div>

      {/* Closing */}
      <p className="text-center max-w-4xl mx-auto tracking-wide leading-relaxed font-light p-3 sm:p-5 text-gray-700 text-sm sm:text-base md:text-lg">
        Together, <span className="brand-text font-medium text-[#7C2420]">Geffron</span> stands for a brand
        that delivers spiritual comfort through fragrance and dependable quality through
        strong products.
      </p>
    </section>
  );
};

export default GeffronMeaning;