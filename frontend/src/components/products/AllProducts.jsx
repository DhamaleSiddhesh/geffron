import React, { useState } from "react";
import TabButton from "../common/TabButton";
import ProductCard from "../common/ProductCard";

import { products } from "../../data/database";

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const categories = [
    "ALL",
    "Agarbatti",
    "Bags",
  ];

  const filteredProducts =
    activeTab === "ALL"
      ? products
      : products.filter((product) => {
          if (activeTab === "Agarbatti") {
            return product.categoryId === "cat_1";
          }

          if (activeTab === "Bags") {
            return product.categoryId === "cat_2";
          }

          return false;
        });

  return (
    <section className="py-6 sm:py-10 max-w-7xl mx-auto">
      {/* Tabs */}
      <div className="flex justify-center items-center gap-1.5 sm:gap-6 mb-6 sm:mb-10 flex-nowrap sm:flex-wrap px-1">
        {categories.map((category) => (
          <TabButton
            key={category}
            title={category}
            isActive={activeTab === category}
            onClick={() => setActiveTab(category)}
          />
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No products available.
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;