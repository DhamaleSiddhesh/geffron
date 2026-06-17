import React from "react";
import CategoryImage from "../../assets/images/product/categoryImage.webp";
import OutlinedButton from "../common/OutlinedButton";
import SectionHeading from "../common/SectionHeading";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      title: "Bags",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus magni accusamus repellat.",
      image: CategoryImage,
    },
    {
      id: 2,
      title: "Agarbatti",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus magni accusamus repellat.",
      image: CategoryImage,
    },
  ];
  return (
    <div className="space-y-15">
      {/* <h1 className="text-center text-4xl tracking-widest bg-white/40 p-3 flex justify-center uppercase font-[200]">Our Products</h1> */}
      <SectionHeading title="Our Collection" />
      {categoriesData.map((category, index) => (
        <div
          key={category.id}
          className={`flex items-center justify-evenly ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div>
            <img
              src={category.image}
              alt={category.title}
              className="w-100 h-125 rounded-4xl"
            />
          </div>

          {/* Content */}
          <div className="text-center max-w-xl">
            <h1 className="text-6xl uppercase font-normal tracking-[0.4em]">
              {category.title}
            </h1>

            <p className="py-10">{category.description}</p>

            <OutlinedButton title="Explore" link={"/products"}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
