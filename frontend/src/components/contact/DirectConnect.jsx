import React from "react";

const DirectConnect = () => {
  return (
    <section className="px-4 md:px-10 py-16 md:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Contact Us
        </h1>
        <div className="w-16 h-[2px] bg-[#7C2420] mx-auto mt-4" />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Let’s connect and build something meaningful together.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT - Contact Details */}
        <div className="lg:w-1/2 space-y-6">
          <div className="text-4xl py-5">
            <h1 className=" tracking-widest font-extralight">DIRECT CONNECT</h1>
            <div className="w-50 h-0.5 bg-[#7C2420]  my-2" />
          </div>

          <div>
            <h2 className="text-2xl brand-text">Geffron</h2>
            <p className=" mt-2">Premium Agarbatti & Bags Manufacturer</p>
          </div>

          <div className="space-y-4 ">
            <p>
              <span className="font-semibold ">📍 Address:</span>
              <br />
              New Panvel, Maharashtra, India
            </p>

            <p>
              <span className="font-semibold">📞 Phone:</span>
              <br />
              +91-7977447864
            </p>

            <p>
              <span className="font-semibold">✉ Email:</span>
              <br />
              info@geffron.com
            </p>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="lg:w-1/2 bg-white border border-gray-200 p-6 md:p-8 rounded-2xl shadow-sm">
          {/* GRID INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420]"
            />

            <input
              type="text"
              placeholder="City"
              className="border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#7C2420]"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            placeholder="Your Message..."
            rows="4"
            className="w-full mt-4 border border-gray-200 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-[#7C2420]"
          ></textarea>

          {/* BUTTON */}
          <button className="w-full mt-5 bg-[#7C2420] text-white py-3 rounded-lg font-medium hover:opacity-90 transition">
            Get Quote
          </button>
        </div>
      </div>
      <div className="pt-10 text-gray-600 leading-relaxed text-center">
        We typically respond within 24 hours. For bulk orders, wholesale
        inquiries, or private labeling, feel free to reach out anytime.
      </div>
    </section>
  );
};

export default DirectConnect;
