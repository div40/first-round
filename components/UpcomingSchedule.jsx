import { ChevronDown } from "lucide-react";
import React from "react";
import ScheduleInfo from "./ScheduleInfo";

const UpcomingSchedule = ({ day, date }) => {
  return (
    <div className="px-4">
      <div className="flex flex-col lg:mt-[25px] mt-[20px] lg:ml-4 lg:px-4 px-5 border border-[#E0E0E0] rounded-t-[12px]">
        <div className="flex items-center justify-between py-[21px] md:px-2 px-1 ">
          <span className="text-[#161E54] font-medium lg:text-xl text-base">
            Upcoming Schedule
          </span>
          <span className="flex border border-[#EFEFEF] rounded-[4px] lg:px-[6px] px-1 text-[#686868] items-center">
            <span className="text-[12px] lg:text-base">{day},</span>
            <span className="text-[12px] lg:text-base text-nowrap">{date}</span>
            <span>
              <ChevronDown className="size-6 cursor-pointer" />
            </span>
          </span>
        </div>
        <span className="text-[#686868] text-sm font-normal -mb-2">
          Priority
        </span>
        <ScheduleInfo
          title={"Review candidate applications"}
          time={"Today - 11.30 AM"}
        />
        <span className="text-[#686868] text-sm font-normal mt-4 -mb-2">
          Other
        </span>
        <ScheduleInfo
          title={"Interview with candidates"}
          time={"Today - 10.30 AM"}
        />
        <ScheduleInfo
          title={"Short meeting with product designer from IT team"}
          time={"Today - 9.50 AM"}
        />
      </div>
      <div className="flex items-center justify-center border-t-0 lg:ml-4 ml-0 rounded-b-[12px] py-[10px] border border-[#E0E0E0]">
        <span className="text-[#FF5151] cursor-pointer">
          Create a New Schedule
        </span>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
