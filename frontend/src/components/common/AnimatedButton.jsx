import React from "react";
import { Link } from "react-router-dom";

const AnimatedButton = ({ title, link }) => {
  return (
    <Link to={link} className="inline-block">
      <button className="cursor-pointer mt-2 sm:mt-4 relative px-6 py-2.5 min-h-[44px] rounded-full border border-black text-black uppercase tracking-widest text-xs sm:text-sm overflow-hidden group transition-all duration-300 inline-flex items-center justify-center">
        <span className="relative z-10 group-hover:text-white transition">
          {title}
        </span>
        <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
      </button>
    </Link>
  );
};

export default AnimatedButton;
