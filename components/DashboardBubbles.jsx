import React from "react";

const DashboardBubbles = ({ bg, title, value, subtitle, subtitleColor }) => {
  return (
    <div
      className="flex flex-col items-start gap-6 rounded-[10px] w-full md:w-[220px] lg:w-[220px] py-3 pl-4 pr-5 cursor-pointer hover:shadow-lg"
      style={{ backgroundColor: `${bg}` }}
    >
      <span className="text-[#161E54] lg:text-lg text-md font-medium leading-6">
        {title}
      </span>
      <span className="text-[#161E54] text-3xl font-medium leading-6">
        {value}
      </span>
      <span
        className="text-sm font-normal leading-6 md:text-base"
        style={{ color: `${subtitleColor}` }}
      >
        {subtitle}
      </span>
    </div>
  );
};

export default DashboardBubbles;
