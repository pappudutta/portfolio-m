import React, { useEffect, useState } from "react";

import Profile from "../assets/asset-2.jpeg";
import circle from "../assets/asset55.svg";
import { CiGlobe } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import BoxHalf from "../components/BoxHalf";
import templateOne from "../assets/asset3.png";
import templateTwo from "../assets/asset4.jpeg";
import lumin from "../assets/asset 5.png";
import nebula from "../assets/asset 6.jpeg";
import wallpaper from "../assets/asset 19.jpeg";
import ProjectIcon from "../assets/asset36.svg";
import templateIcon from "../assets/asset 35.svg";
import btnIcon from "../assets/asset 33.svg";
import OneThirdBox from "../components/oneThirdBox";

const home = () => {
  const words = ["fine details.", "microinteractions.", "visual magic."];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide =>
        prevSlide === words.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* hero section */}
      <div className="flex gap-5 flex-col md:flex-row justify-between align-middle px-5 py-5 items-start">
        <div className="flex align-middle opacity-80 hover:opacity-100 items-center">
          <img
            className="w-12 rounded-full border border-slate-600 p-1"
            src={Profile}
            alt=""
          />
          <div className="px-2">
            <h2 className="text-sm font-semibold">Mrinal Chakraborty</h2>
            <p className="text-md font-light ">UX/UI Designer</p>
          </div>
        </div>
        <div className="flex items-center">
          <CiGlobe />
          <p className="px-1 text-sm font-thin">
            NYC, USA • 37.0902° N, 95.7129° W
          </p>
        </div>
      </div>
      <div className="w-2/3 md:w-2/5 px-5 items-center">
        <p className="text-lg">
          <span className="opacity-60">
            Remote visual & brand designer at Monos Studio. Crafting interfaces
            with sprinkles of{" "}
          </span>
          <span className="text-white opacity-90">{words[currentSlide]}</span>
        </p>
        <div className="flex gap-1 items-center py-3">
          <img src={circle} className="w-3" alt="" />
          <p className="text-sm font-light">Available for projects</p>
        </div>
        <div className="flex align-middle py-4">
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
      <div className="md:flex">
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
      {/* third section */}
      <div className="md:flex lg:gap-4 w-[100%]">
        <div className="md:w-1/3">
          <BoxHalf
            iCon={templateIcon}
            templateName="Template"
            headingName="Lumin"
            peraName="Portfolio template"
            tempImg={lumin}
          />
        </div>
        <div className="md:w-1/3">
          <BoxHalf
            iCon={ProjectIcon}
            templateName="Project"
            headingName="Nebula"
            peraName="Fintech"
            tempImg={nebula}
          />
        </div>
        <div className="md:w-1/3">
          <OneThirdBox />
        </div>
      </div>
      {/* forth section */}
      <div className="md:flex w-[100%]">
        <div className="md:w-2/3">
          <OneThirdBox />
        </div>
        <div className="md:w-1/3">
          <OneThirdBox />
        </div>
      </div>
      {/* fifth section */}
      <div className="md:flex md:w-[100%]">
        <div className="md:w-1/3">
          <OneThirdBox />
        </div>

        <div className="md:w-2/3">
          <BoxHalf
            iCon={ProjectIcon}
            templateName="Project"
            headingName="Wallpaper"
            peraName="Design"
            tempImg={wallpaper}
          />
        </div>
      </div>
    </>
  );
};

export default home;
