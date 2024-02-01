import React from "react";
import DashboardBubbles from "./DashboardBubbles";
import BubbleWithChart from "./BubbleWithChart";
import Announcement from "./Announcement";

const Dashboard = () => {
  return (
    <div className="flex flex-col pl-4 pr-4 mt-8 lg:pl-12 lg:pr-0">
      <div className="mb-6">
        <h1 className="text-[#161E54] font-medium lg:text-3xl text-xl md:text-2xl">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <DashboardBubbles
          title={"Available Position"}
          value={24}
          subtitle={"4 Urgently needed"}
          bg={"#FFEFE7"}
          subtitleColor={"#FF5151"}
        />
        <DashboardBubbles
          title={"Job Open"}
          value={10}
          subtitle={"4 Active hiring"}
          bg={"#E8F0FB"}
          subtitleColor={"#3786F1"}
        />
        <DashboardBubbles
          title={"New Employees"}
          value={24}
          subtitle={"4 Department"}
          bg={"#FDEBF9"}
          subtitleColor={"#EE61CF"}
        />
      </div>
      <div className="flex flex-col gap-4 mt-10 md:flex-row">
        <BubbleWithChart
          title={"Total Employees"}
          value={"216"}
          men={"120"}
          women={"96"}
          rate={"+2%"}
        />
        <BubbleWithChart
          title={"Talent Request"}
          value={"16"}
          men={"6"}
          women={"10"}
          rate={"+5%"}
        />
      </div>
      <div>
        <Announcement day={"Today"} date={"13 Sep 2024"} />
      </div>
    </div>
  );
};

export default Dashboard;
