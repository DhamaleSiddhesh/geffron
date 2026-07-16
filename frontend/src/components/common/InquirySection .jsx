import React from "react";
import ctaImage from "../../assets/images/home/cta.jpeg";

const InquirySection = () => {
  return (
    <section
      className="relative py-25 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-10 items-center z-10">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold text-white leading-relaxed uppercase tracking-wide">
            Start your journey with <span className="brand-text">Geffron</span>{" "}
            today.
          </h2>

          <p className="text-white/80 mt-4 text-lg md:text-xl">
            Let’s build something amazing together.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 bg-white/20 backdrop-blur-xl border border-white/30 p-6 md:p-8 rounded-2xl shadow-2xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border rounded-lg px-4 py-3 bg-white/90 outline-none focus:ring-2 focus:ring-[#B32922]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-lg px-4 py-3 bg-white/90 outline-none focus:ring-2 focus:ring-[#B32922]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 bg-white/90 outline-none focus:ring-2 focus:ring-[#B32922]"
            />

            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-3 bg-white/90 outline-none focus:ring-2 focus:ring-[#B32922]"
            />

            <select
              className="border rounded-lg px-4 py-3 bg-white/90 outline-none focus:ring-2 focus:ring-[#B32922]"
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
            className="w-full mt-4 border rounded-lg px-4 py-3 bg-white/90 outline-none resize-none focus:ring-2 focus:ring-[#B32922]"
          />

          <button className="w-full mt-5 bg-[#B32922] text-white py-3 rounded-lg font-semibold hover:bg-[#ce3b3b] transition">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;