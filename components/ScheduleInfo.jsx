import React from "react";
import { IoIosMore } from "react-icons/io";

const ScheduleInfo = ({ title, time }) => {
  return (
    <div className="flex items-center justify-between border border-[#E0E0E0] rounded-[6px] bg-[#fafafa] py-3 px-4 mt-4 cursor-pointer hover:shadow-md">
      <div className="flex flex-col pr-8">
        <span className="text-[#303030] text-[13px] md:text-base font-normal">
          {title}
        </span>
        <span className="text-[#686868] text-[10px] md:text-xs font-normal">
          {time}
        </span>
      </div>
      <div>
        <IoIosMore className="size-8 text-[#B2B2B2]" />
      </div>
    </div>
  );
};

export default ScheduleInfo;
