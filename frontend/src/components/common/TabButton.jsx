import React from "react";

const TabButton = ({ title, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`uppercase tracking-widest border px-5 py-2 rounded-lg border-black cursor-pointer transition-all duration-300 ease-in-out
        ${isActive ? "bg-green-300 " : " text-black hover:bg-green-300"}
      `}
    >
      {title}
    </button>
  );
};

export default TabButton;