import React from "react";
import SectionHeading from "../common/SectionHeading";

const ProductIntro = () => {
  return (
    <section className="px-4 md:px-10 py-16 md:max-w-6xl mx-auto space-y-15">
      <SectionHeading title={"Our Products"} />

      {/* AGARBATTI SECTION */}
      <div className="m-0 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Agarbatti (Incense Sticks)
        </h3>

        <p className="text-gray-700 leading-loose py-5">
          Premium handcrafted incense sticks made using natural ingredients and
          traditional formulations blended with modern manufacturing techniques.
          Designed to create a calm, soothing, and spiritual atmosphere.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700 py-5">
          <span className="px-4 py-1 border rounded-full">
            Long-lasting fragrance
          </span>
          <span className="px-4 py-1 border rounded-full">Low smoke</span>
          <span className="px-4 py-1 border rounded-full">
            Natural ingredients
          </span>
          <span className="px-4 py-1 border rounded-full">Clean burning</span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Suitable for homes, temples, meditation centers, hotels, offices, and
          wholesale distribution.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 w-full max-w-2xl mx-auto" />

      {/* BAGS SECTION */}
      <div className="m-0 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Bags (Packaging & Utility Bags)
        </h3>

        <p className="text-gray-700 leading-loose py-5">
          Strong, durable, and reliable bags designed for packaging, retail,
          industrial, and daily use. Built with high-quality materials and
          precise craftsmanship for long-lasting performance.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700 py-5">
          <span className="px-4 py-1 border rounded-full">
            Durable material
          </span>
          <span className="px-4 py-1 border rounded-full">Custom branding</span>
          <span className="px-4 py-1 border rounded-full">
            Eco-friendly options
          </span>
          <span className="px-4 py-1 border rounded-full">
            Strong stitching
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed">
          Ideal for retail shops, packaging industries, promotions, and everyday
          utility use.
        </p>
      </div>
    </section>
  );
};

export default ProductIntro;
