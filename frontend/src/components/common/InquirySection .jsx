import React from "react";

const InquirySection = () => {
  return (
    <section className="bg-gradient-to-r from-green-200 to-green-300 py-14">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl md:text-5xl font-bold text-black leading-relaxed uppercase tracking-wide">
            Start your journey with <span className="brand-text">Geffron</span>{" "}
            today.
          </h2>

          <p className="text-black/70 mt-4 text-lg md:text-xl">
            Let’s build something amazing together.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/2 bg-white/20 backdrop-blur-xl border-2 border-white/40 p-6 md:p-8 rounded-2xl shadow-2xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="text-black border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Mobile */}
            <input
              type="tel"
              placeholder="Mobile Number"
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* City */}
            <input
              type="text"
              placeholder="City"
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

            <select
              className="border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Agarbatti">Agarbatti</option>
              <option value="Bags">Bags</option>
            </select>
          </div>

          {/* MESSAGE (FULL WIDTH) */}
          <textarea
            placeholder="Your Message..."
            rows="4"
            className="w-full mt-4 border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          {/* BUTTON */}
          <button className="w-full mt-5 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
