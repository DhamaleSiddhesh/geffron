import React from "react";

const TabButton = ({ title, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase tracking-normal sm:tracking-widest border px-2.5 sm:px-5 py-1.5 sm:py-2.5 min-h-[34px] sm:min-h-[44px] text-[11px] sm:text-sm font-medium rounded-lg border-black cursor-pointer transition-all duration-300 ease-in-out inline-flex items-center justify-center whitespace-nowrap shrink-0
        ${isActive ? "bg-[#B32922] text-white border-[#B32922]" : "text-black hover:bg-[#B32922] hover:text-white hover:border-[#B32922]"}
      `}
    >
      {title}
    </button>
  );
};

export default TabButton;