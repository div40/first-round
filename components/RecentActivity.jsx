import React from "react";

const RecentActivity = ({ time, title, description, activityNumber }) => {
  return (
    <div className="flex flex-col lg:mt-[93px] mt-[50px] lg:ml-4 px-4">
      <div className="flex flex-col bg-[#1B204A] py-4 pl-7 pr-6 rounded-t-[10px]">
        <span className="text-xl font-medium text-white">Recent Activity</span>
      </div>
      <div className="bg-[#161E54] flex flex-col gap-3 rounded-b-[10px] p-7">
        <span className="text-sm font-medium text-white/50">{time}</span>
        <span className="text-xl font-medium text-white">{title}</span>
        <span className="font-normal text-white/80">{description}</span>
        <div className="flex flex-row items-center justify-between mt-4">
          <div className="text-white">
            Today you made {activityNumber} activities
          </div>
          <div className="bg-[#FF5151] md:px-4 px-2 py-2 text-white md:text-base text-sm text-center font-medium rounded-md cursor-pointer hover:shadow-lg shadow-[#ff5151]">
            See all activity
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
