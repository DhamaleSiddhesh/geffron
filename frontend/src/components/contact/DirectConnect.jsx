import React from "react";

const DirectConnect = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
          Contact Us
        </h1>
        <div className="w-16 h-[2px] bg-[#7C2420] mx-auto mt-3 sm:mt-4" />
        <p className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Let’s connect and build something meaningful together.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT - Contact Details */}
        <div className="lg:w-1/2 space-y-4 sm:space-y-6">
          <div className="py-2 sm:py-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-widest font-extralight text-gray-900">
              DIRECT CONNECT
            </h2>
            <div className="w-32 sm:w-48 h-0.5 bg-[#7C2420] my-2" />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl brand-text font-semibold text-[#7C2420]">Geffron</h3>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-700">
              Premium Agarbatti & Bags Manufacturer
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-gray-700">
            <p>
              <span className="font-semibold text-gray-900">📍 Address:</span>
              <br />
              New Panvel, Maharashtra, India
            </p>

            <p>
              <span className="font-semibold text-gray-900">📞 Phone:</span>
              <br />
              <a href="tel:+917977447864" className="hover:text-[#7C2420] transition-colors">
                +91-7977447864
              </a>
            </p>

            <p>
              <span className="font-semibold text-gray-900">✉ Email:</span>
              <br />
              <a href="mailto:info@geffron.com" className="hover:text-[#7C2420] transition-colors">
                info@geffron.com
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="lg:w-1/2 bg-white border border-gray-200 p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm">
          {/* GRID INPUTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420] text-sm sm:text-base min-h-[44px]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420] text-sm sm:text-base min-h-[44px]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420] text-sm sm:text-base min-h-[44px]"
            />

            <input
              type="text"
              placeholder="City"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420] text-sm sm:text-base min-h-[44px]"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            placeholder="Your Message..."
            rows="4"
            className="w-full mt-3 sm:mt-4 border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#7C2420] text-sm sm:text-base"
          ></textarea>

          {/* BUTTON */}
          <button className="w-full mt-4 sm:mt-5 bg-[#7C2420] text-white py-3 rounded-lg font-medium hover:opacity-90 transition min-h-[44px] text-base cursor-pointer">
            Get Quote
          </button>
        </div>
      </div>

      <div className="pt-8 sm:pt-10 text-gray-600 leading-relaxed text-center text-xs sm:text-sm max-w-3xl mx-auto">
        We typically respond within 24 hours. For bulk orders, wholesale
        inquiries, or private labeling, feel free to reach out anytime.
      </div>
    </section>
  );
};

export default DirectConnect;
