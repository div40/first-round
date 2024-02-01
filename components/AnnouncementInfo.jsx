import { MoreHorizontal, Pin } from "lucide-react";
import React from "react";

const AnnouncementInfo = ({ title, time }) => {
  return (
    <div className="border border-[#E0E0E0] rounded-[6px] px-4 py-3 bg-[#fafafa] cursor-pointer relative md:h-[70px] h-[80px] hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className=" text-[14px] md:text-base">{title}</div>
        <div className="flex text-[#B2B2B2] items-center md:pt-1 justify-between md:gap-10 gap-2">
          <Pin />
          <MoreHorizontal />
        </div>
        <div className="absolute md:top-9 top-11">
          <span className="text-[#686868] lg:text-[12px] text-[10px]">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementInfo;
