import React from "react";
import { BiMessageSquareEdit } from "react-icons/bi";

const BoxHalf = ({ templateName, headingName, peraName, tempImg, iCon }) => {
  return (
    <>
      <div className="m-2 relative border border-slate-600 bg-[#343434a7] hover:bg-[#292929c4] rounded-[25px] p-2 opacity-60 hover:opacity-100">
        <div className="flex px-3 py-3 align-middle">
          <img src={iCon} className="w-5 text-white " alt="" />
          <p className="text-sm px-1 align-middle">{templateName}</p>
        </div>
        <img
          src={tempImg}
          className="border border-gray-700 relative rounded-[17px] h-[85%] "
          alt=""
        />
        <div className="absolute left-10 bottom-10">
          <h2 className="text-4xl">{headingName}</h2>
          <p className="p-1 text-sm">{peraName}</p>
        </div>
      </div>
    </>
  );
};

export default BoxHalf;
