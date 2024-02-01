"use client";
import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Sun",
    users: 400,
  },
  {
    name: "Mon",
    users: 600,
  },
  {
    name: "Tue",
    users: 500,
  },
  {
    name: "Wed",
    users: 700,
  },
  {
    name: "Thu",
    users: 400,
  },
  {
    name: "Fri",
    users: 500,
  },
  {
    name: "Sat",
    users: 450,
  },
];

const BubbleWithChart = ({ title, value, men, women, rate }) => {
  return (
    <div className="flex flex-row md:w-full">
      <div className="flex md:gap-8 justify-between border border-[#E0E0E0] rounded-[10px] md:p-5 p-3 w-full">
        <div className="flex flex-col gap-4">
          <span className="text-[#161E54] md:text-lg text-md font-medium">
            {title}
          </span>
          <span className="text-[#161E54] text-3xl font-medium">{value}</span>
          <span className="text-[#686868] text-sm md:text-base">{men} Men</span>
          <span className="text-[#686868] -mt-4 text-sm md:text-base">
            {women} Women
          </span>
        </div>
        <div>
          <div className="w-[120px] h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Tooltip
                  contentStyle={{ background: "transparent", border: "none" }}
                  labelStyle={{ display: "none" }}
                  position={{ x: 10, y: 50 }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#FF5151"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-[#FFEFE7] px-2 rounded-[4px]">
            <span className="text-sm text-[#303030] text-nowrap">
              {rate} Past month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleWithChart;
