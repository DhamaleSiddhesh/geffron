import React from 'react'

const SectionHeading = ({ title }) => {
  return (
    <h2 className="text-center text-xl sm:text-3xl md:text-4xl tracking-[0.15em] sm:tracking-[0.3em] bg-white/40 py-2.5 sm:py-3 px-4 rounded-2xl flex justify-center uppercase font-extralight text-gray-900 ">
      {title}
    </h2>
  );
};

export default SectionHeading