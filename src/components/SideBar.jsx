import React from "react";
import {ImSearch} from "react-icons/im";

const SideBar = ({showSideBar}) => {
  return (
    <div className={`w-full p-5 fixed top-16 left-0 bg-white bg-opacity-40 backdrop-blur-xl z-10 ${showSideBar? "translate-y-0" : "-translate-y-[100%]"} transition-all md:hidden block`}>
      <div className="flex flex-col xs:items-start items-center text-sm gap-3">
        <a href="#" className="active ">
          Home
        </a>
        <a href="#">Detail</a>
        <a href="#">Pages</a>
        <a href="#">Elements</a>
        <div className="flex gap-2 items-center bg-white bg-opacity-30 px-3 rounded-md border-black border-[1px] border-opacity-40">
          <input type="text" className="sm:w-72 w-36 h-8 bg-transparent outline-none " name="search" />
          <label htmlFor="search"><ImSearch/></label>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
