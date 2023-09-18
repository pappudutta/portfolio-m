import React from "react";

const BoxHalf = ({ templateName, headingName, peraName, tempImg, iCon }) => {
  return (
    <>
      <div className="m-2 relative border rounded-[25px] p-2">
        <div className="flex px-3 py-3 align-middle">
          <img src={iCon} className="w-5 text-white " alt="" />
          <p className="text-sm px-1 align-middle">{templateName}</p>
        </div>
        <img
          src={tempImg}
          className="border border-inherit relative rounded-[17px] w-[100%] h-[300px] object-cover"
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
