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
    <section className="">
      <div className=" text-center">
        <SectionHeading title="Why Choose Geffron" />
        {/* <section className="py-16 bg-gray-50"> */}
        <div className="max-w-screen-xl mx-auto px-6">
          {/* Grid */}
          <div className="flex flex-wrap justify-center items-center gap-20 pt-15">
            <div>
              <img
                src={why_choose_us}
                alt="why choose us image"
                className="h-120 w-auto"
              />
            </div>
            <div>
              {features.map((item, index) => (
                <div className="flex items-start py-5 gap-4">
                  <TbArrowBadgeDown size={50}/>

                  <div key={index} className="text-start ">
                    <h3 className="text-2xl font-medium tracking-widest ">
                      {item.title}
                    </h3>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* </section> */}
      </div>
    </section>
  );
};

export default WhyChooseGeffron;
