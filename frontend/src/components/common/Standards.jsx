import React from "react";
import animal from "../../assets/icons/animal-antler-deer-svgrepo-com.svg";
import child from "../../assets/icons/no-child-labour.svg";
import greenClean from "../../assets/icons/green-clean.svg";
import makeInIndia from "../../assets/icons/make-in-india.png";

const Standards = () => {
  return (
    <div className="px-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <ul className="flex flex-wrap gap-4 sm:gap-10 md:gap-20 justify-center list-inside list-disc items-center text-sm sm:text-lg md:text-2xl font-semibold text-gray-800">
        <li className="uppercase">Natural</li>
        <li className="uppercase">Hygienic</li>
        <li className="uppercase">Eco Friendly</li>
      </ul>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-10 max-w-5xl mx-auto">
        <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-3 sm:p-4 text-center bg-gray-50/50 hover:shadow-sm transition">
          <img className="w-auto h-14 sm:h-18 md:h-20 object-contain" src={animal} alt="Not tested on animals" />
          <p className="p-2 font-semibold text-xs sm:text-sm md:text-base text-gray-800">Not Tested On Animals</p>
        </div>
        <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-3 sm:p-4 text-center bg-gray-50/50 hover:shadow-sm transition">
          <img className="w-auto h-14 sm:h-18 md:h-20 object-contain" src={child} alt="Child labour free" />
          <p className="p-2 font-semibold text-xs sm:text-sm md:text-base capitalize text-gray-800">Child Labour Free</p>
        </div>
        <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-3 sm:p-4 text-center bg-gray-50/50 hover:shadow-sm transition">
          <img className="w-auto h-14 sm:h-18 md:h-20 object-contain" src={greenClean} alt="Clean and green" />
          <p className="p-2 font-semibold text-xs sm:text-sm md:text-base capitalize text-gray-800">Clean & Green</p>
        </div>
        <div className="flex flex-col items-center border border-gray-200 rounded-2xl p-3 sm:p-4 text-center bg-gray-50/50 hover:shadow-sm transition">
          <img className="w-auto h-14 sm:h-18 md:h-20 object-contain" src={makeInIndia} alt="Make in India" />
          <p className="p-2 font-semibold text-xs sm:text-sm md:text-base capitalize text-gray-800">Make In India</p>
        </div>
      </div>
    </div>
  );
};

export default Standards;
