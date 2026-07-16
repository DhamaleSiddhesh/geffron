import React from "react";
import AnimatedButton from "./AnimatedButton";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl overflow-hidden  hover:shadow-lg transition">
      <div className="w-full h-100 bg-gray-100 overflow-hidden">
        <img
          className="w-full h-full object-cover p-4 hover:scale-105 transition duration-300"
          src={product.mainImage}
          alt={product.name}
        />
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold">{product.name}</h3>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {product.desicription}
        </p>

        <AnimatedButton title="Explore" link={"/product"} />
      </div>
    </div>
  );
};

export default ProductCard;
