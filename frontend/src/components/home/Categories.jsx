import React from "react";
import CategoryImage from "../../assets/images/product/categoryImage.webp";
import OutlinedButton from "../common/OutlinedButton";
import SectionHeading from "../common/SectionHeading";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Agarbatti",
      description:
        "Handcrafted premium incense sticks made with natural formulations to bring peace, fragrance, and positive energy to every environment.",
      image: CategoryImage,
    },
    {
      id: 2,
      title: "Bags",
      description:
        "Durable, stylish, and high-quality packaging and utility bags engineered for retail, industrial, and everyday consumer requirements.",
      image: CategoryImage,
    },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionHeading title="Our Collection" />
      {categoriesData.map((category, index) => (
        <div
          key={category.id}
          className={`flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12 ${
            index % 2 !== 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={category.image}
              alt={category.title}
              className="w-full max-w-sm sm:max-w-md h-64 sm:h-80 md:h-96 lg:h-120 rounded-3xl lg:rounded-4xl object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:w-1/2 max-w-xl px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-normal tracking-wider sm:tracking-widest text-gray-900">
              {category.title}
            </h2>

            <p className="py-4 sm:py-6 lg:py-8 text-sm sm:text-base text-gray-700 leading-relaxed">
              {category.description}
            </p>

            <OutlinedButton title="Explore" link={"/products"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
