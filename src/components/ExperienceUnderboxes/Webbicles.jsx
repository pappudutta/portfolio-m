import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Webbicles = ({ figIcon }) => {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <div className="relative w-[50px] h-[50px]">
          <LazyLoadImage
            src={figIcon}
            className="inset-0 w-50% h-50% pt-2 mx-auto object-cover rounded-[12px]"
            alt=""
          />
        </div>
        <div className="w-full pl-2 hover:translate-x-1  duration-300 items-center">
          <h4 className="opacity-80  text-sm">Webbicles</h4>
          <p className="opacity-60 font-light text-sm">
            UX Designer • 2020-2022
          </p>
        </div>
      </div>
      {/* <hr className="my-2 w-[97%] mx-auto opacity-20" /> */}
    </>
  );
};

export default Webbicles;
