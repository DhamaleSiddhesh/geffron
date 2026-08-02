import React from "react";
import ctaImage from "../../assets/images/home/cta.jpeg";

const InquirySection = () => {
  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 lg:py-25 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-10 items-center z-10">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-relaxed uppercase tracking-wide">
            Start your journey with <span className="brand-text text-[#E53E3E]">Geffron</span>{" "}
            today.
          </h2>

          <p className="text-white/90 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl">
            Let’s build something amazing together.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 bg-white/20 backdrop-blur-xl border border-white/30 p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-3 bg-white/90 text-gray-900 outline-none focus:ring-2 focus:ring-[#B32922] text-sm sm:text-base min-h-[44px]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-lg px-4 py-3 bg-white/90 text-gray-900 outline-none focus:ring-2 focus:ring-[#B32922] text-sm sm:text-base min-h-[44px]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 bg-white/90 text-gray-900 outline-none focus:ring-2 focus:ring-[#B32922] text-sm sm:text-base min-h-[44px]"
            />

            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-3 bg-white/90 text-gray-900 outline-none focus:ring-2 focus:ring-[#B32922] text-sm sm:text-base min-h-[44px]"
            />

            <select
              className="border rounded-lg px-4 py-3 bg-white/90 text-gray-900 outline-none focus:ring-2 focus:ring-[#B32922] text-sm sm:text-base min-h-[44px] sm:col-span-2 lg:col-span-1"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Agarbatti">Agarbatti</option>
              <option value="Bags">Bags</option>
            </select>
          </div>

          <textarea
            placeholder="Your Message..."
            rows="4"
            className="w-full mt-3 sm:mt-4 border rounded-lg px-4 py-3 bg-white/90 text-gray-900 outline-none resize-none focus:ring-2 focus:ring-[#B32922] text-sm sm:text-base"
          />

          <button className="w-full mt-4 sm:mt-5 bg-[#B32922] text-white py-3.5 rounded-lg font-semibold hover:bg-[#ce3b3b] transition text-base min-h-[44px] cursor-pointer">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;