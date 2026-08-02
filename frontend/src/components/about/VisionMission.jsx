import React from "react";

const VisionMission = () => {
  return (
    <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-between w-full">
        {/* Vision */}
        <div className="border-2 border-[#7C2420] rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden flex-1 bg-white shadow-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-[#7C2420] text-center">
            Our Vision
          </h2>

          <div className="w-12 h-0.5 bg-[#7C2420] mx-auto my-4 sm:my-6" />

          <p className="px-2 sm:px-6 font-medium text-gray-700 leading-relaxed text-center text-sm sm:text-base">
            To become a trusted global brand in agarbatti and bag manufacturing,
            recognized for quality, innovation, and ethical business practices.
          </p>
        </div>

        {/* Mission */}
        <div className="border-2 border-[#7C2420] rounded-2xl p-6 sm:p-8 md:p-10 overflow-hidden flex-1 bg-white shadow-sm">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-[#7C2420] text-center">
            Our Mission
          </h2>

          <div className="w-12 h-0.5 bg-[#7C2420] mx-auto my-4 sm:my-6" />

          <p className="px-2 sm:px-6 font-medium text-gray-700 leading-relaxed text-center text-sm sm:text-base">
            To provide high-quality, affordable, and sustainable products that
            meet the evolving needs of our customers while maintaining the
            highest standards of manufacturing excellence.
          </p>
        </div>
      </div>

      {/* Commitment */}
      <div className="mt-6 sm:mt-8 p-6 sm:p-8 md:p-10 border-2 border-[#7C2420] rounded-2xl bg-white shadow-sm">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wider uppercase text-[#7C2420] text-center">
          Our Commitment
        </h2>

        <div className="w-12 h-0.5 bg-[#7C2420] mx-auto my-4 sm:my-6" />

        <p className="px-2 sm:px-6 font-medium text-gray-700 leading-relaxed text-center text-sm sm:text-base max-w-3xl mx-auto">
          At Geffron, we believe in integrity, continuous improvement, and
          long-term partnerships. We strive to deliver products that enhance
          everyday life and create lasting value for our customers and partners.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
