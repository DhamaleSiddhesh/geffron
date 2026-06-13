import React from "react";

const OutlinedButton = (props) => {
  const { title , bgColor="bg-white", textColor="text-black" } = props;
  return (
    <button className={`${bgColor} ${textColor} px-6 py-2 rounded-full backdrop-blur-sm relative overflow-hidden h-10 cursor-pointer group`}>
      {/* First span: current text */}
      <span className="uppercase block transition-transform duration-300 ease-in-out group-hover:-translate-y-10">
        {title}
      </span>

      {/* Second span: slides up from below */}
      <span className="uppercase absolute left-0 top-full w-full text-center transition-transform duration-300 ease-in-out group-hover:-translate-y-8">
        {title}
      </span>
    </button>
  );
};

export default OutlinedButton;
