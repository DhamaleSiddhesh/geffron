import React from "react";
import SectionHeading from "../common/SectionHeading";
// import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Optional, for icons

const features = [
  {
    title: "Professional Expertise",
    desc: "Skilled team with industry experience",
  },
  {
    title: "Customer-Centric Approach",
    desc: "Your success is our priority",
  },
  {
    title: "Innovative Solutions",
    desc: "Modern tools and creative thinking",
  },
  {
    title: "Reliable Support",
    desc: "Ongoing assistance and maintenance",
  },
  {
    title: "Quality Assurance",
    desc: "High standards and timely delivery",
  },
];

const WhyChooseGeffron = () => {
  return (
    <section className="">
      <div className=" text-center">
        <SectionHeading title="Why Choose Geffron" />
        {/* <section className="py-16 bg-gray-50"> */}
          <div className="max-w-screen-xl mx-auto px-6">

            {/* Grid */}
            <div className="flex flex-wrap justify-center gap-6 pt-15">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white/40 rounded-xl shadow hover:shadow-xl hover:scale-105 duration-300 ease-in-out transition border"
                >
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        {/* </section> */}
      </div>
    </section>
  );
};

export default WhyChooseGeffron;
