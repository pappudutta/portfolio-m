import React from "react";
import figma from "../assets/asset 7.png";
import UnderBox from "./Productivity/UnderBox";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Productivity = () => {
  return (
    <>
      <div className="m-2 border border-[#52525b4a] hover:border-[#52525b86] bg-[#29292966] hover:bg-[#292929] rounded-[25px] p-2 ">
        <div className="p-3 align-middle">
          <LazyLoadImage src="" className="w-5 text-white " alt="" />
          <p className="text-sm font-light px-1 align-middle opacity-60">
            Productivity
          </p>
        </div>
        <div className="mt-20 w-full border border-[#3a3a3afd] hover:border-[#52525b86] bg-[#ffffff13] hover:bg-[#ffffff16] rounded-[20px] p-2">
          <div className="flex flex-row">
            <div className="basis-1/3 w-full h-full mx-2">
              <UnderBox title="Slack" description="Work Chat" figIcon={figma} />
              <UnderBox
                title="Telegram"
                description="Personal Chat"
                figIcon={figma}
              />
              <UnderBox
                title="Notes"
                description="Quick Notes"
                figIcon={figma}
              />
            </div>
            <div className="basis-1/3 w-full mx-2">
              <UnderBox title="Jira" description="To-do list" figIcon={figma} />
              <UnderBox title="Notion" description="Projects" figIcon={figma} />
              <UnderBox title="Zoom" description="Work calls" figIcon={figma} />
            </div>
            <div className="basis-1/3 w-full mx-2">
              <UnderBox
                title="Trello"
                description="To-do list"
                figIcon={figma}
              />
              <UnderBox
                title="Evernote"
                description="quick note"
                figIcon={figma}
              />
              <UnderBox
                title="Monday.com"
                description="To-do list"
                figIcon={figma}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productivity;
