import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { removeUser } from "../feature/service/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = JSON.parse(Cookies.get("user"));
  const dispatch = useDispatch();
  const nav = useNavigate("");
  const logoutHandler = () => {
    dispatch(removeUser());
    nav("/login");
  };
  return (
    <nav className=" bg-white p-4 shadow-sm uppercase font-bold absolute top-0 left-0 z-10 w-full">
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
          <span className="flex gap-1 items-center">
            <FiSearch className="text-sm" />
            search
          </span>
          <button
            className="flex gap-1 items-center"
            onClick={() => setShowCart(true)}
          >
            <BsCart2 className="text-sm" />
            cart
          </button>

          <div className="flex flex-col">
            <button
              className="flex gap-1 items-center"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <HiUserCircle className="text-lg" />
              {user?.firstName}
              <IoMdArrowDropdown className="text-lg" />
            </button>
            {showDropdown && (
              <div className="relative">
                <div className="absolute px-5 py-2 bg-white top-2 border border-black rounded-md border-opacity-30 flex flex-col items-center">
                  <button
                    className="flex items-center gap-1"
                    onClick={logoutHandler}
                  >
                    <HiOutlineLogout className="text-base" />
                    <p className="text-sm">Logout</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Cart showCart={showCart} setShowCart={setShowCart} />
    </nav>
  );
};

export default Navbar;
