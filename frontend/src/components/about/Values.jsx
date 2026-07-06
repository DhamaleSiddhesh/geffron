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
    <section className="py-16">
      <div className="text-center">
        <SectionHeading title="Our Values" />

        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-20 pt-15">
            {/* Image */}
            <div>
              <img
                src={why_choose_us}
                alt="Our Values"
                className="h-120 w-auto"
              />
            </div>

            {/* Values */}
            <div>
              {values.map((item, index) => (
                <div
                  key={index}
                  // className="flex items-start gap-4 "
                >
                  {/* <TbArrowBadgeDown size={50} /> */}

                  <div className="text-start p-5 rounded-2xl bg-white shadow-lg my-4 hover:">
                    <h3 className="text-2xl font-medium tracking-widest">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">
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