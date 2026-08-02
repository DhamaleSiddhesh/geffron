import React from "react";
import SectionHeading from "../common/SectionHeading";
import { TbArrowBadgeDown } from "react-icons/tb";
import why_choose_us from "../../assets/images/home/why_choose_us.webp";

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
    <section className=" sm:py-10">
      <div className="text-center">
        <SectionHeading title="Why Choose Geffron" />
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex Container */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 pt-8 sm:pt-12 lg:pt-15">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={why_choose_us}
                alt="Why choose us"
                className="h-64 sm:h-80 md:h-100 lg:h-120 w-auto max-w-full object-contain rounded-2xl shadow-md"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-1">
              {features.map((item, index) => (
                <div key={index} className="flex items-start py-3 sm:py-4 gap-3 sm:gap-4 border-b border-gray-100 last:border-0">
                  <TbArrowBadgeDown size={36} className="text-[#7C2420] shrink-0 mt-0.5" />

                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide sm:tracking-widest text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGeffron;
