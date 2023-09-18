import React from "react";

const BoxHalf = ({ templateName, headingName, peraName, tempImg, iCon }) => {
  return (
    <>
      <div className="m-2 relative border border-[#52525b4a] hover:border-[#52525b4a] bg-[#29292966] hover:bg-[#292929] rounded-[25px] p-2">
        <div className="flex px-3 py-3 align-middle">
          <img src={iCon} className="w-5" alt="" />
          <p className="text-sm font-light  pl-2 align-middle opacity-70 hover:opacity-100 cursor-pointer">
            {templateName}
          </p>
        </div>
        <img
          src={tempImg}
          className="border border-[#52525b4a] hover:border-[#52525b98] bg-[#18181866] hover:bg-[#292929] relative rounded-[17px] w-[100%] h-[300px] object-cover"
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
