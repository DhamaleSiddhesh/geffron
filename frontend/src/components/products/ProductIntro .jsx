import React from "react";
import SectionHeading from "../common/SectionHeading";

const ProductIntro = () => {
  return (
    <section className="m-0 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl mx-auto space-y-8 sm:space-y-12">
      <SectionHeading title={"Our Products"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
        {/* AGARBATTI SECTION */}
        <div className="m-0 text-center border-2 border-[#7C2420] rounded-2xl p-5 sm:p-8 bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              Agarbatti (Incense Sticks)
            </h3>

            <p className="text-gray-700 leading-relaxed py-4 sm:py-5 text-sm sm:text-base">
              Premium handcrafted incense sticks made using natural ingredients
              and traditional formulations blended with modern manufacturing
              techniques. Designed to create a calm, soothing, and spiritual
              atmosphere.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 py-4">
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">
                Long-lasting fragrance
              </span>
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">Low smoke</span>
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">
                Natural ingredients
              </span>
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">Clean burning</span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm mt-4">
            Suitable for homes, temples, meditation centers, hotels, offices,
            and wholesale distribution.
          </p>
        </div>

        {/* BAGS SECTION */}
        <div className="m-0 text-center border-2 border-[#7C2420] rounded-2xl p-5 sm:p-8 bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              Bags (Packaging & Utility Bags)
            </h3>

            <p className="text-gray-700 leading-relaxed py-4 sm:py-5 text-sm sm:text-base">
              Strong, durable, and reliable bags designed for packaging, retail,
              industrial, and daily use. Built with high-quality materials and
              precise craftsmanship for long-lasting performance.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 py-4">
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">
                Durable material
              </span>
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">
                Custom branding
              </span>
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">
                Eco-friendly options
              </span>
              <span className="px-3 sm:px-4 py-1 border rounded-full bg-gray-50">
                Strong stitching
              </span>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-xs sm:text-sm mt-4">
            Ideal for retail shops, packaging industries, promotions, and
            everyday utility use.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
