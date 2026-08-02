import React from "react";
import AnimatedButton from "./AnimatedButton";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition border border-gray-100 h-full">
      <div className="w-full h-52 sm:h-72 md:h-80 bg-gray-100 overflow-hidden flex items-center justify-center p-2">
        <img
          className="w-48 h-48 sm:w-full sm:h-full object-cover rounded-lg hover:scale-105 transition duration-300"
          src={product.mainImage}
          alt={product.name}
        />
      </div>

      <div className="p-4 sm:p-5 text-center flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-1">{product.name}</h3>

          <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
            {product.description || product.desicription}
          </p>
        </div>

        <div className="mt-4">
          <AnimatedButton title="Explore" link={"/product"} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
