import React from "react";

const UnderBox = ({ figIcon }) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="relative w-[50px] h-[50px] rounded-xl">
          <img
            src={figIcon}
            className="inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
        <div>
          <h4>Figma</h4>
          <p>Design tool</p>
        </div>
      </div>
      <hr className="my-2 w-[97%] mx-auto items-center opacity-20" />
    </>
  );
};

export default UnderBox;
