import React from "react";
import Profile from "../assets/asset-2.jpeg";
import circle from "../assets/asset55.svg";
import { CiGlobe } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";

const home = () => {
  return (
    <>
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
        <div>
          <button className="bg-pink-300 px-5 py-2 rounded-full">
            Connect
          </button>
          <button className="bg-pink-300 px-2 py-2 mx-2 rounded-full">
            <SlEnvolope />
          </button>
        </div>
      </div>
    </>
  );
};

export default home;
