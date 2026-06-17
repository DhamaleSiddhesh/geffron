import React, { useState } from "react";
import TabButton from "../common/TabButton";
import ProductCard from "../common/ProductCard";
import juteProduct from "../../assets/images/product/jute-product.webp";
import agarbattiProduct from "../../assets/images/product/agarbatti-product.webp";

const products = [
  {
    id: 1,
    image: juteProduct,
    name: "Bag Large",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 2,
    image: juteProduct,
    name: "Bag Small",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 3,
    image: juteProduct,
    name: "Bag Large",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 4,
    image: juteProduct,
    name: "Bag Small",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 5,
    image: juteProduct,
    name: "Bag Large",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 6,
    image: juteProduct,
    name: "Bag Small",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Bags",
  },
  {
    id: 7,
    image: agarbattiProduct,
    name: "Agarbatti Lavender",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Agarbatti",
  },
  {
    id: 8,
    image: agarbattiProduct,
    name: "Agarbatti Sandalwood",
    desicription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim soluta rem reiciendis amet est.",
    category: "Agarbatti",
  },
];

const AllProducts = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const categories = ["ALL", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeTab === "ALL"
      ? products
      : products.filter((p) => p.category === activeTab);

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 max-w-6xl mx-auto">
        {filteredProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
