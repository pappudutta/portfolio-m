import React from "react";
import insta from "../assets/asset 41.svg";
import linkdn from "../assets/asset 42.svg";
import twitter from "../assets/asset 39.svg";

import UnderBox from "./SocialUnderboxes/UnderBox";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SocialBox = () => {
  return (
    <>
      <div className="m-2 border border-[#52525b4a] hover:border-[#52525b86] bg-[#29292966] hover:bg-[#292929] rounded-[25px] p-2 ">
        <div className="p-3 align-middle">
          <LazyLoadImage src="" className="w-5 text-white " alt="" />
          <p className="text-sm font-light px-1 align-middle opacity-60">
            Social
          </p>
        </div>
        <div className="mt-4 w-[100%] border border-[#3a3a3afd] hover:border-[#52525b86] bg-[#ffffff13] hover:bg-[#ffffff16] rounded-[20px] p-2">
          <UnderBox title="Twitter" description="ux_mrinal" figIcon={twitter} />
          <UnderBox
            title="Instgram"
            description="tharki_designer"
            figIcon={insta}
          />
          <UnderBox title="Linkedin" description="uxmrinal" figIcon={linkdn} />
          <UnderBox
            title="Email"
            description="mrinal@mrinalchakraborty.in"
            figIcon={twitter}
          />
        </div>
      </div>
    </>
  );
};

export default SocialBox;
