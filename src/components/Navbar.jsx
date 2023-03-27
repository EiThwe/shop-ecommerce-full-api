import React from "react";
import {FiSearch} from "react-icons/fi"
import {BsCart2} from "react-icons/bs"
import {HiUserCircle} from "react-icons/hi"
import Cookies from "js-cookie";

const Navbar = () => {
    const user = JSON.parse(Cookies.get("user"))
  return (
    <nav className=" bg-white p-4 shadow-sm uppercase font-bold">
      <div className="flex justify-around items-center gap-10">
        <div className="flex  gap-10 text-xs text-gray-400">
          <a href="#" className="active ">
            Home
          </a>
          <a href="#">Detail</a>
          <a href="#">Pages</a>
          <a href="#">Elements</a>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">Shop</h1>
        </div>
        <div className="flex  gap-12 text-xs text-gray-800">
          <span className="flex gap-1 items-center"><FiSearch className="text-sm"/>search</span>
          <span className="flex gap-1 items-center"><BsCart2 className="text-sm"/>cart</span>
          <span className="flex gap-1 items-center"><HiUserCircle className="text-lg"/>{user?.firstName}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
