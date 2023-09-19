import React, { useEffect, useState } from "react";
import Profile from "../../assets/asset-2.jpeg";
import { CiGlobe } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
import BoxHalf from "../../components/BoxHalf";
import templateOne from "../../assets/asset3.png";
import templateTwo from "../../assets/asset4.jpeg";
import lumin from "../../assets/asset 5.png";
import nebula from "../../assets/asset 6.jpeg";
import wallpaper from "../../assets/asset 19.jpeg";
import ProjectIcon from "../../assets/asset36.svg";
import templateIcon from "../../assets/asset 35.svg";
import btnIcon from "../../assets/asset 33.svg";
import OneThirdBox from "../../components/oneThirdBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// react image lazy load
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./style.css";

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
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-start px-5 ">
        <div className="flex">
          <div className="flex gap-2 items-center">
            <LazyLoadImage
              width={45}
              height={45}
              className="w-12 rounded-full border border-slate-400 hover:border-slate-200 p-1"
              src={Profile}
              alt=""
            />
            <div>
              <h2 className="text-sm font-normal">Mrinal Chakraborty</h2>
              <p className="text-sm font-light opacity-60">UX/UI Designer</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0 justify-center align-middle">
          <div className="flex gap-1 items-center">
            <CiGlobe />
            <p className="px-1 text-sm font-thin">
              NYC, USA • 37.0902° N, 95.7129° W
            </p>
          </div>
          <div className="flex gap-1 items-center py-3">
            {/* img src={circle} className="w-3" alt="" /> */}
            <span className="animate-ping absolute h-[9px] w-[9px] bg-green-500 rounded-full mx-1"></span>
            <span className="relative h-[9px] w-[9px] bg-green-500 rounded-full mx-1"></span>
            <p className="text-md font-light">Open for work.</p>
          </div>
        </div>
      </div>
      <div className="w-[80%] md:w-[50%] lg:w-[40%] xl:[30%] px-5 items-center pt-2">
        <p className="text-lg">
          <span className="opacity-70">
            Remote visual & brand designer at Monos Studio. Crafting interfaces
            with sprinkles of{" "}
          </span>
          <span className="h-[20px] slider-box ">
            {words.map((word, index) => (
              <span
                key={index}
                className={`slider-word ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                {word}
              </span>
            ))}
          </span>
        </p>

        <div className="flex align-middle py-8">
          <button className="border border-[#52525b4a] hover:border-[#52525b4a] bg-[#29292966] hover:bg-[#292929] px-5 py-2 rounded-full">
            <div className="flex gap-1">
              <LazyLoadImage src={btnIcon} className="w-5" alt="" />
              <span className="opacity-80 font-light">Connect</span>
            </div>
          </button>
          <button className="border border-[#52525b4a] hover:border-[#52525b4a] bg-[#29292966] hover:bg-[#292929] px-3 py-3 mx-2 rounded-full">
            <SlEnvolope />
          </button>
        </div>
      </div>
      {/* second section */}
      <div className="mt-5"></div>
      <div className="md:flex md:w-full">
        <div className="md:w-1/2">
          <BoxHalf
            iCon={templateIcon}
            templateName="Template"
            headingName="Monos"
            peraName="Portfolio template"
            tempImg={templateOne}
          />
        </div>
        <div className="md:w-1/2">
          <BoxHalf
            iCon={ProjectIcon}
            templateName="Project"
            headingName="Interstellar"
            peraName="Fintech"
            tempImg={templateTwo}
          />
        </div>
      </div>
      {/* third section */}
      <div className="md:flex">
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
      <div className="w-full md:flex mr-2">
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
      <Footer />
      <Header />
    </>
  );
};

export default home;
