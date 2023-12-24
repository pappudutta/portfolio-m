import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const UnderBox = ({ figIcon, title, description }) => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <div className="relative w-[50px] h-[50px] rounded-xl">
          <LazyLoadImage
            src={figIcon}
            className="inset-0 mt-2 mx-auto w-[20px] h-[20px] object-cover rounded-[12px]"
            alt=""
          />
        </div>
        <div className="w-full pl-2 hover:translate-x-1  duration-300 items-center">
          <h4 className="opacity-80  text-sm">{title}</h4>
          <p className="opacity-60 font-light text-sm">{description}</p>
        </div>
      </div>
      <hr className="my-2 w-[97%] mx-auto opacity-20" />
    </>
  );
};

export default UnderBox;