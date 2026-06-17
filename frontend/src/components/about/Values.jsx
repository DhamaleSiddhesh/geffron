import React from "react";
import SectionHeading from "../common/SectionHeading";

const Values = () => {
  const values = [
    {
      title: "Integrity",
      desc: "Honest and transparent in all our dealings",
      bg: "bg-white",
    },
    {
      title: "Innovation",
      desc: "Constantly improving and evolving with modern ideas",
      bg: "bg-gray-300",
    },
    {
      title: "Quality",
      desc: "Commitment to excellence in every product",
      bg: "bg-green-100",
    },
    {
      title: "Collaboration",
      desc: "Working closely with clients and partners",
      bg: "bg-blue-100",
    },
  ];

  return (
    <section className="py-16 px-4">
      
      <SectionHeading title={"Our Values"} />

      {/* TOP 3 CARDS */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">

        {values.slice(0, 3).map((item, i) => (
          <div
            key={i}
            className={`${item.bg} p-10 md:p-15 rounded-2xl shadow-sm hover:shadow-md transition text-center`}
          >
            <p className="pb-4 font-bold text-2xl text-gray-800">
              {item.title}
            </p>
            <p className="font-semibold tracking-wide">{item.desc}</p>
          </div>
        ))}

      </div>

      {/* BOTTOM CENTER CARD */}
      <div className="flex justify-center mt-8 ">

        <div className={`${values[3].bg}  p-10 md:p-15 rounded-2xl shadow-sm hover:shadow-md transition text-center w-full md:max-w-md`}>

          <p className="pb-4 font-bold text-2xl text-gray-800">
            {values[3].title}
          </p>

          <p className="font-semibold tracking-wide">
            {values[3].desc}
          </p>

        </div>

      </div>

    </section>
  );
};

export default Values;