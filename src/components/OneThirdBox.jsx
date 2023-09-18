import React from "react";
import figma from "../assets/asset 7.png";
import UnderBox from "./UnderBox";

const OneThirdBox = () => {
  return (
    <>
      <div className="m-2 border border-slate-100 rounded-[25px] p-2 ">
        <div className="p-3 align-middle">
          <img src="" className="w-5 text-white " alt="" />
          <p className="text-sm px-1 align-middle">templateName</p>
        </div>
        <div className="mt-20 w-[100%] border border-slate-100 rounded-[20px] p-2">
          <UnderBox figIcon={figma} />
          <UnderBox figIcon={figma} />
          <UnderBox figIcon={figma} />
        </div>
      </div>
    </>
  );
};

export default OneThirdBox;
