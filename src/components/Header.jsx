import React, { useState } from "react";
import Profile from "../assets/asset-2.jpeg";
import Projects from "../assets/asset 24.svg";
import Stack from "../assets/asset 25.svg";
import Notes from "../assets/asset 26.svg";
import Misc from "../assets/asset 27.svg";
import More from "../assets/asset 28.svg";

// submenu icons import
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsMedium } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

// submenu icons data
const subNavData = [
  { name: "twitter", icon: <FiTwitter /> },
  { name: "figma", icon: <FiFigma /> },
  { name: "instagram", icon: <FiInstagram /> },
  { name: "linkdin", icon: <BiLogoLinkedin /> },
  { name: "medium", icon: <BsMedium /> },
  { name: "mail", icon: <AiOutlineMail /> },
];

// style
import "./style.css";

const Header = () => {
  const [submenu, setSubmenu] = useState(false);
  const handleSubmenu = () => {
    setSubmenu(!submenu);
  };
  return (
    <>
      {/* menus */}
      <div className="opacity-1">
        <div className="bottom-10 w-full relative items-center flex justify-center">
          {/* submenu */}
          <div
            className={`${
              !submenu ? "hidden" : ""
            } animate-menu fixed bottom-32`}
          >
            <div className="flex items-center gap-1 box border border-[#292929] p-2 rounded-full backdrop-blur-[2px] bg-[#292929dd] mx-auto">
              {subNavData.map((item, index) => {
                return (
                  <div className="w-10 h-10 flex flex-col justify-center items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1 mx-auto">
                    <div className="relative text-lg text-white opacity-50 hover:opacity-70 mx-auto transition-all delay-300">
                      {item.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* main menu */}

          <div className="fixed bottom-16 inline-flex gap-1 box border border-[#292929] p-2 rounded-full backdrop-blur-[2px] bg-[#292929dd] mx-auto ">
            <div className="">
              <img
                className="w-10 rounded-full border border-[#383838] hover:border-[#707070] transition ease-in-out delay-100 p-1"
                src={Profile}
                alt=""
              />
            </div>
            <div className="w-10 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
              <img
                className="w-[21px] mt-1  text-white opacity-100"
                src={Projects}
                alt=""
              />
            </div>
            <div className="w-10 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
              <img
                className="w-[21px] mt-1  text-white opacity-100"
                src={Stack}
                alt=""
              />
            </div>
            <div className="w-10 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
              <img
                className="w-[21px] mt-1  text-white opacity-100"
                src={Notes}
                alt=""
              />
            </div>
            <div className="w-10 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1">
              <img
                className="w-[21px] mt-1  text-white opacity-100"
                src={Misc}
                alt=""
              />
            </div>
            <div
              onClick={handleSubmenu}
              className="w-10 flex flex-col items-center bg-[#151515] hover:bg-[#3e3e3e] rounded-full border border-[#3e3e3e] hover:border-[#3e3e3e] transition ease-in-out delay-100 p-1"
            >
              <img
                className="w-[21px] mt-1 text-white opacity-100"
                src={More}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
