import React from "react";
import { products, productSpecs, pricing } from "../../data/database";
import juteProduct from "../../assets/images/product/jute-product.webp";

const ProductDetail = () => {
  const product = products.find((p) => p.slug === "premium-jute-bag-large");

  if (!product) {
    return <p className="text-center p-10 text-gray-500">Product not found</p>;
  }

  const specs = productSpecs.find((s) => s.productId === product.id);

  const price = pricing.find((p) => p.productId === product.id);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* IMAGE */}
        <div className="space-y-4">
          {/* MAIN IMAGE */}
          <div className="p-5 w-full bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={juteProduct}
              alt={product.name}
              className="w-auto sm:w-auto sm:h-80 md:h-[550px] md:w-auto object-cover hover:scale-105 transition duration-500 shadow-lg rounded-2xl"
            />
          </div>

          {/* THUMBNAILS */}
          {product.images?.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={juteProduct}
                  alt="thumbnail"
                  className="w-auto h-25 shrink-0 object-cover rounded-lg border hover:scale-105 transition cursor-pointer"
                />
              ))}
            </div>
          )}
        </div>

        {/* INFO */}
        <div className="space-y-5 sm:space-y-6">
          {/* TITLE */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {product.description && (
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          {/* META */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
            {product.brand && (
              <p>
                <span className="font-semibold">Brand:</span> {product.brand}
              </p>
            )}

            {product.productType && (
              <p>
                <span className="font-semibold">Type:</span>{" "}
                {product.productType}
              </p>
            )}

            {product.material && (
              <p>
                <span className="font-semibold">Material:</span>{" "}
                {product.material}
              </p>
            )}

            {product.modelCode && (
              <p className="sm:col-span-2">
                <span className="font-semibold">Model:</span>{" "}
                {product.modelCode}
              </p>
            )}
          </div>

          {/* PRICE */}
          {price && (
            <div className="mt-4 p-4 sm:p-5 rounded-2xl border bg-white shadow-sm space-y-2">
              {/* Price row */}
              <div className="flex items-end gap-3 flex-wrap">
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{price.sellingPrice}
                </p>

                {price.discountPercent > 0 && (
                  <>
                    <p className="text-sm sm:text-base text-gray-400 line-through">
                      ₹{price.price}
                    </p>

                    <p className="text-sm sm:text-base font-semibold text-green-600">
                      {price.discountPercent}% OFF
                    </p>
                  </>
                )}
              </div>

              {/* Extra info */}
              <p className="text-xs text-gray-500">Inclusive of all taxes</p>
            </div>
          )}

          {/* CTA */}
          <button className="w-full bg-[#7C2420] hover:bg-[#5a1a17] text-white py-3.5 rounded-xl font-semibold uppercase tracking-wide transition min-h-[44px] text-sm sm:text-base cursor-pointer">
            Enquire Now
          </button>

          <p className="text-xs text-gray-500 text-center">
            We typically respond within 24 hours
          </p>
        </div>
      </div>

      {/* SPECIFICATIONS */}
      {specs && (
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Product Specifications
          </h2>

          <div className="border rounded-2xl overflow-x-auto bg-white shadow-sm">
            <table className="w-full text-left min-w-[500px]">
              <tbody className="divide-y">
                {specs.dimensions && (
                  <tr className="bg-gray-50">
                    <th className="p-3.5 sm:p-4 font-semibold text-gray-700 w-1/3 text-xs sm:text-sm">
                      Dimensions
                    </th>
                    <td className="p-3.5 sm:p-4 text-gray-700 font-semibold text-xs sm:text-sm">
                      {specs.dimensions.length} × {specs.dimensions.width} ×{" "}
                      {specs.dimensions.height}
                    </td>
                  </tr>
                )}

                {specs.length && (
                  <tr>
                    <th className="p-3.5 sm:p-4 font-semibold text-gray-700 text-xs sm:text-sm">Length</th>
                    <td className="p-3.5 sm:p-4 text-gray-700 font-semibold text-xs sm:text-sm">
                      {specs.length}
                    </td>
                  </tr>
                )}

                {specs.burnTime && (
                  <tr className="bg-gray-50">
                    <th className="p-3.5 sm:p-4 font-semibold text-gray-700 text-xs sm:text-sm">
                      Burn Time
                    </th>
                    <td className="p-3.5 sm:p-4 text-gray-700 font-semibold text-xs sm:text-sm">
                      {specs.burnTime}
                    </td>
                  </tr>
                )}

                {specs.diameter && (
                  <tr>
                    <th className="p-3.5 sm:p-4 font-semibold text-gray-700 text-xs sm:text-sm">
                      Diameter
                    </th>
                    <td className="p-3.5 sm:p-4 text-gray-700 font-semibold text-xs sm:text-sm">
                      {specs.diameter}
                    </td>
                  </tr>
                )}

                {specs.packaging && (
                  <tr className="bg-gray-50">
                    <th className="p-3.5 sm:p-4 font-semibold text-gray-700 text-xs sm:text-sm">
                      Packaging
                    </th>
                    <td className="p-3.5 sm:p-4 text-gray-700 font-semibold text-xs sm:text-sm">
                      {specs.packaging}
                    </td>
                  </tr>
                )}

                {specs.weightOptions?.length > 0 && (
                  <tr>
                    <th className="p-3.5 sm:p-4 font-semibold text-gray-700 text-xs sm:text-sm">
                      Weight Options
                    </th>
                    <td className="p-3.5 sm:p-4 text-gray-700 font-semibold text-xs sm:text-sm">
                      {specs.weightOptions.join(", ")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* BENEFITS */}
          {specs.benefits?.length > 0 && (
            <div className="mt-6 sm:mt-8 p-5 sm:p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold mb-3 sm:mb-4 text-gray-900 text-xl sm:text-2xl">
                Key Benefits
              </h3>

              <ul className="space-y-2 text-gray-700">
                {specs.benefits.map((b, i) => (
                  <li key={i} className="flex gap-2 text-xs sm:text-sm md:text-base">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700 font-semibold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
