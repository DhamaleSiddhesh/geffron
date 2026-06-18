import React from "react";
import AnimatedButton from "./AnimatedButton";

const ProductCard = ({product}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden  hover:shadow-lg transitio">
      <img
        className="w-full h-auto object-cover"
        src={product.image}
        alt={product.name}
      />

      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{product.name}</h3>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {product.desicription}
        </p>

        <AnimatedButton title="Explore" link={"/product"}/>
      </div>
    </div>
  );
};

export default ProductCard;
