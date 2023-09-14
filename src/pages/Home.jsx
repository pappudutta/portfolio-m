import React from "react";
import Profile from "../assets/asset-2.jpeg";
import circle from "../assets/asset55.svg";
import { CiGlobe } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import BoxHalf from "../components/BoxHalf";
import templateOne from "../assets/asset3.png";
import templateTwo from "../assets/asset4.jpeg";
import ProjectIcon from "../assets/asset36.svg";
import templateIcon from "../assets/asset 35.svg";
import btnIcon from "../assets/asset 33.svg";

const home = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex justify-between align-middle px-5 py-5">
        <div className="flex align-middle">
          <img className="w-12 rounded-full" src={Profile} alt="" />
          <div className="px-2">
            <h2>Mrinal Chakraborty</h2>
            <p>UX/UI Designer</p>
          </div>
        </div>
        <div className="flex  align-middle">
          <CiGlobe />
          <p className="px-1">NYC, USA • 37.0902° N, 95.7129° W</p>
        </div>
      </div>
      <div className="">
        <p>
          Remote visual & brand designer at Monos Studio. Crafting interfaces
          with sprinkles of <span>Visual Magic</span>
        </p>
        <div className="flex align-middle py-1">
          <img src={circle} className="px-1 w-5" alt="" />
          <p>available for projects</p>
        </div>
        <div className="flex align-middle">
          <button className="border border-gray-700 bg-[#29292966] hover:bg-[#292929] px-5 py-2 rounded-full">
            <div className="flex gap-1">
              <img src={btnIcon} className="w-5" alt="" />
              Connect
            </div>
          </button>
          <button className="border border-gray-700 bg-[#29292966] hover:bg-[#292929] px-3 py-3 mx-2 rounded-full">
            <SlEnvolope />
          </button>
        </div>
      </div>
      {/* second section */}
      <div className="lg:flex w-5/10">
        <BoxHalf
          iCon={templateIcon}
          templateName="Template"
          headingName="Monos"
          peraName="Portfolio template"
          tempImg={templateOne}
        />
        <BoxHalf
          iCon={ProjectIcon}
          templateName="Project"
          headingName="Interstellar"
          peraName="Fintech"
          tempImg={templateTwo}
        />
      </div>
    </>
  );
};

export default home;
