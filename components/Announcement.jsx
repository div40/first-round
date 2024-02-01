import { ChevronDown } from "lucide-react";
import React from "react";
import AnnouncementInfo from "./AnnouncementInfo";

const Announcement = ({ day, date }) => {
  return (
    <div className="mt-10 border border-[#E0E0E0] rounded-[12px] py-3 lg:px-5 px-2">
      <div className="flex justify-between">
        <span className="text-[#161E54] leading-7 font-medium lg:text-2xl text-md">
          Announcement
        </span>
        <span className="flex border border-[#EFEFEF] rounded-[4px] lg:px-[6px] px-1 text-[#686868] items-center">
          <span className="text-xs lg:text-base">{day},</span>
          <span className="text-xs lg:text-base">{date}</span>
          <span>
            <ChevronDown size={20} className="cursor-pointer" />
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-4 lg:mt-8 mt-2 px-4 lg:px-0">
        <AnnouncementInfo
          title={"Outing schedule for every department"}
          time={"5 Minutes ago"}
        />
        <AnnouncementInfo
          title={"Meeting HR department"}
          time={"Yesterday, 12:30 PM"}
        />
        <AnnouncementInfo
          title={"IT Department needs two more talents for UI/UX"}
          time={"Yesterday, 09:15 AM"}
        />
      </div>
      <div className="flex items-center justify-center pt-2 cursor-pointer">
        <span className="text-[#FF5151]">See All Announcement</span>
      </div>
    </div>
  );
};

export default Announcement;
