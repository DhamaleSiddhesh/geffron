import React from "react";
import SectionHeading from "../common/SectionHeading";
import { TbArrowBadgeDown } from "react-icons/tb";
import why_choose_us from "../../assets/images/home/why_choose_us.webp";

const values = [
  {
    title: "Integrity",
    desc: "Honest and transparent in all our dealings",
  },
  {
    title: "Innovation",
    desc: "Constantly improving and evolving with modern ideas",
  },
  {
    title: "Quality",
    desc: "Commitment to excellence in every product",
  },
  {
    title: "Collaboration",
    desc: "Working closely with clients and partners",
  },
];

const Values = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="text-center">
        <SectionHeading title="Our Values" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 pt-8 sm:pt-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={why_choose_us}
                alt="Our Values"
                className="h-64 sm:h-80 md:h-96 lg:h-120 w-auto max-w-full object-cover border-2 border-white shadow-xl rounded-2xl"
              />
            </div>

            {/* Values */}
            <div className="w-full lg:w-1/2 space-y-2">
              {values.map((item, index) => (
                <div key={index}>
                  <div className="text-left p-4 sm:p-5 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-lg transition">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-[#7C2420]">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                      {item.desc}
                    </p>
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

export default Values;