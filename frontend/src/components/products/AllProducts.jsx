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
    <section className="py-10">

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">

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