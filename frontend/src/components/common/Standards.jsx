import React from "react";
import animal from "../../assets/icons/animal-antler-deer-svgrepo-com.svg";
import child from "../../assets/icons/no-child-labour.svg";
import greenClean from "../../assets/icons/green-clean.svg";
import makeInIndia from "../../assets/icons/make-in-india.png";

const Standards = () => {
  return (
    <div className="p-5 bg-white">
      <ul className="flex gap-10 md:gap-20 justify-center list-disc items-center text-2xl font-semibold">
        <li className="uppercase ">Natural</li>
        <li className="uppercase ">Hygienic</li>
        <li className="uppercase ">Eco Friendly</li>
      </ul>
      <div className="flex justify-center gap-15 pt-10">
        <div className="flex flex-col items-center border rounded-2xl p-2">
          <img className="w-auto h-20" src={animal} alt="" />
          <p className="p-2 font-semibold">Not Tested On Animals</p>
        </div>
        <div className="flex flex-col items-center border rounded-2xl p-2">
          <img className="w-auto h-20" src={child} alt="" />
          <p className="p-2 font-semibold capitalize">Child labour Free</p>
        </div>
        <div className="flex flex-col items-center border rounded-2xl p-2">
          <img className="w-auto h-20" src={greenClean} alt="" />
          <p className="p-2 font-semibold capitalize">Clean & Green</p>
        </div>
        <div className="flex flex-col items-center border rounded-2xl p-2">
          <img className="w-auto h-20" src={makeInIndia} alt="" />
          <p className="p-2 font-semibold capitalize">Make in india</p>
        </div>
      </div>
    </div>
  );
};

export default Standards;
