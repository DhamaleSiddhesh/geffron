import React from "react";
import SectionHeading from "../common/SectionHeading";

const GeffronMeaning = () => {
  return (
    <section className="px-2 md:px-4 md:py-10">

      <SectionHeading title={"About Geffron Name & Meaning"} />

      {/* Intro */}
      <p className="text-center max-w-4xl mx-auto tracking-wider leading-loose font-light p-5 text-gray-700">
        The name <span className="brand-text font-medium">Geffron</span> represents growth,
        fragrance, strength, and spiritual harmony. It is a unique brand identity created
        to symbolize reliability, purity, and positive energy.
      </p>

      {/* Main breakdown */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-10 px-4 md:p-10 text-center md:text-left">

        {/* GEF */}
        <div className="flex-1 space-y-2">
          <span className="font-bold text-2xl brand-color block">
            "GEF"
          </span>
          <span className="font-semibold text-gray-700 leading-relaxed">
            symbolizes growth, freshness, and life energy, reflecting the natural fragrance
            and purity of our agarbatti products that uplift the mind and spirit.
          </span>
        </div>

        {/* PLUS */}
        <div className="flex items-center justify-center text-2xl font-bold text-gray-500">
          +
        </div>

        {/* FRON */}
        <div className="flex-1 space-y-2">
          <span className="font-bold text-2xl brand-color block">
            "Fron"
          </span>
          <span className="font-semibold text-gray-700 leading-relaxed">
            represents strength, foundation, and structure, symbolizing the durability
            and reliability of our bags that support everyday needs.
          </span>
        </div>

        {/* EQUAL */}
        <div className="flex items-center justify-center text-2xl font-bold text-gray-500">
          =
        </div>

        {/* Spiritual */}
        <div className="flex-1 space-y-2">
          <span className="font-bold text-2xl brand-color block">
            Spiritual Meaning:
          </span>
          <span className="font-semibold text-gray-700 leading-relaxed">
            Geffron also represents peace, positivity, and spiritual balance. Fragrance
            is traditionally used in prayers, meditation, and sacred rituals to create
            a divine and calming atmosphere.
          </span>
        </div>

      </div>

      {/* Closing */}
      <p className="text-center md:max-w-4xl mx-auto tracking-wider leading-loose font-light p-2 pt-5 md:pt-0 md:p-5 text-gray-700">
        Together, <span className="brand-text font-medium">Geffron</span> stands for a brand
        that delivers spiritual comfort through fragrance and dependable quality through
        strong products.
      </p>

    </section>
  );
};

export default GeffronMeaning;