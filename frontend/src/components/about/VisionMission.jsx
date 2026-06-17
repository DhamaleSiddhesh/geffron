import React from "react";

const VisionMission = () => {
  return (
    <section className="py-5 px-6">
      <div className="flex flex-col xl:gap-0 gap-10 xl:flex-row justify-center items-stretch mx-auto">
        {/* Vision */}
        <div className="border-2 border-[#7C2420] rounded-2xl md:rounded-tr-full md:rounded-bl-full p-8 md:p-10 overflow-hidden flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase text-[#7C2420] text-center">
            Our Vision
          </h2>

          <div className="w-12 h-0.5 bg-[#7C2420] mx-auto my-6" />

          <p className="px-4 md:px-10 font-medium text-gray-700 leading-relaxed text-center">
            To become a trusted global brand in agarbatti and bag manufacturing,
            recognized for quality, innovation, and ethical business practices.
          </p>
        </div>

        {/* Mission */}
        <div className="border-2 border-[#7C2420] rounded-2xl md:rounded-tr-full md:rounded-bl-full p-8 md:p-10 overflow-hidden flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase text-[#7C2420] text-center">
            Our Mission
          </h2>

          <div className="w-12 h-0.5 bg-[#7C2420] mx-auto my-6" />

          <p className="px-4 md:px-10 font-medium text-gray-700 leading-relaxed text-center">
            To provide high-quality, affordable, and sustainable products that
            meet the evolving needs of our customers while maintaining the
            highest standards of manufacturing excellence.
          </p>
        </div>
      </div>
      <div className="py-10 md:border-0 border-2 mt-10 md:m-0 border-[#7C2420] rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-widest uppercase text-[#7C2420] text-center">
          Our Commitment
        </h2>

        <div className="w-12 h-0.5 bg-[#7C2420] mx-auto my-6" />

        <p className="px-4 md:px-10 font-medium text-gray-700 leading-relaxed text-center">
          At Geffron, we believe in integrity, continuous improvement, and
          long-term partnerships. We strive to deliver products that enhance
          everyday life and create lasting value for our customers and partners.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
