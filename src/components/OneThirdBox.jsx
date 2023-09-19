import React from "react";
import figma from "../assets/asset 7.png";
import UnderBox from "./UnderBox";
import { LazyLoadImage } from "react-lazy-load-image-component";

const OneThirdBox = () => {
  return (
    <>
      <div className="m-2 border border-[#52525b4a] hover:border-[#52525b86] bg-[#29292966] hover:bg-[#292929] rounded-[25px] p-2 ">
        <div className="p-3 align-middle">
          <LazyLoadImage src="" className="w-5 text-white " alt="" />
          <p className="text-sm font-light px-1 align-middle opacity-60">
            templateName
          </p>
        </div>
        <div className="mt-20 w-[100%] border border-[#3a3a3afd] hover:border-[#52525b86] bg-[#ffffff13] hover:bg-[#ffffff16] rounded-[20px] p-2">
          <UnderBox figIcon={figma} />
          <UnderBox figIcon={figma} />
          <UnderBox figIcon={figma} />
        </div>
      </div>
    </>
  );
};

export default OneThirdBox;
