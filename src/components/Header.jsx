import React from "react";
import Profile from "../assets/asset-2.jpeg";
import Projects from "../assets/asset 24.svg";
import Stack from "../assets/asset 25.svg";
import Notes from "../assets/asset 26.svg";
import Misc from "../assets/asset 27.svg";
import More from "../assets/asset 28.svg";

const Header = () => {
  return (
    <>
      <div className="flex  fixed z-20 bottom-10 w-[100%] items-center mx-auto px-2">
        <div className="inline-flex gap-1 md:gap-2 box border border-[#292929] m-5 p-2 rounded-full bg-[#292929c4] mx-auto">
          <div className="">
            <img
              className="w-12 rounded-full border border-[#383838] hover:border-[#707070] transition ease-in-out delay-100 p-1"
              src={Profile}
              alt=""
            />
          </div>
          <div className="w-12 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
            <img
              className="w-[21px] mt-2 text-white opacity-100"
              src={Projects}
              alt=""
            />
          </div>
          <div className="w-12 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
            <img
              className="w-[21px] mt-2 text-white opacity-100"
              src={Stack}
              alt=""
            />
          </div>
          <div className="w-12 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
            <img
              className="w-[21px] mt-2 text-white opacity-100"
              src={Notes}
              alt=""
            />
          </div>
          <div className="w-12 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
            <img
              className="w-[21px] mt-2 text-white opacity-100"
              src={Misc}
              alt=""
            />
          </div>
          <div className="w-12 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
            <img
              className="w-[21px] mt-2 text-white opacity-100 "
              src={More}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
