import React from "react";
import figma from "../assets/asset 7.png";
import UnderBox from "./UnderBox";

const OneThirdBox = () => {
  return (
    <>
      <div className="m-2 border border-slate-600 bg-[#343434a7] hover:bg-[#292929c4] rounded-[25px] p-2 opacity-60 hover:opacity-100 overflow-hidden">
        <div className="px-3 py-3 align-middle">
          <img src="" className="w-5 text-white " alt="" />
          <p className="text-sm px-1 align-middle">templateName</p>
        </div>
        <div className="mt-20 w-[100%] border border-slate-600 bg-[#343434a7] hover:bg-[#292929c4] rounded-[20px] p-2">
          <UnderBox figIcon={figma} />
          <UnderBox figIcon={figma} />
          <UnderBox figIcon={figma} />
        </div>
      </div>
    </>
  );
};

export default OneThirdBox;
