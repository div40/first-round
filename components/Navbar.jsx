import React from "react";
import { ChevronDown, Menu, Search } from "lucide-react";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import { BiSolidMessageDots } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4 justify-between px-4 lg:px-[50px] md:px-[20px] md:pt-8 pt-4 md:pb-6 pb-2  min-w-full border-b">
      <Menu
        className="lg:hidden md:block sm:block -mr-36 pr-2 text-neutral-400"
        size={36}
      />
      <div className="flex items-center md:bg-[#fafafa] justify-between px-4 py-[10px] focus:outline-none md:border border-[#E0E0E0] rounded-[4px] lg:w-[350px] md:w-[253px]">
        <input
          type="text"
          placeholder="Search"
          className="focus:outline-none hidden md:block bg-[#fafafa] "
        />
        <Search className="text-neutral-400" size={28} />
      </div>
      <div className="flex items-center lg:justify-center gap-6">
        <FaBell className="text-neutral-500/50 size-6" />
        <BiSolidMessageDots className="text-neutral-500/50 size-6" />
        <div className="flex items-center gap-3">
          <Image
            src={"/userimage.jpg"}
            alt="profile picture"
            className="rounded-full h-[34px] w-[34px] md:h-[42px] md:w-[42px]"
            height={42}
            width={42}
          />
          <span className="text-[#161E54] leading-6 font-medium hidden lg:block">
            Admirra John
          </span>
          <ChevronDown className="text-[#737898]" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
