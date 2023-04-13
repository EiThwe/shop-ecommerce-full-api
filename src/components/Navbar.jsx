import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { HiUserCircle } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImMenu3,ImMenu4 } from "react-icons/im";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../feature/service/authSlice";
import { Navigate, useNavigate } from "react-router-dom";

import Cart from "./Cart";
import SideBar from "./SideBar";

const Navbar = () => {
  const { cart } = useSelector((state) => state.cartSlice);
  const totalQuantity = cart.reduce((pv, cv) => pv + cv.quantity, 0);
  const [showSideBar,setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const user = JSON.parse(Cookies.get("user"));
  const dispatch = useDispatch();
  const nav = useNavigate("");
  const logoutHandler = () => {
    dispatch(removeUser());
    nav("/login");
  };

useEffect(()=>{
window.addEventListener("resize",()=>{
  // console.log(window.innerWidth);
  if(window.innerWidth > 820){
    setShowSideBar(false);
  }
})
},[])
  return (
    <>
      <SideBar showSideBar={showSideBar} />
      <nav className=" bg-white py-4 px-4 md:shadow-md shadow-xl uppercase font-[900] sticky top-0 left-0  w-full z-20">
        <div className="flex justify-between md:justify-around items-center gap-10">
          <div className="md:flex hidden gap-5 lg:gap-10 text-xs text-gray-400">
            <a href="#" className="active ">
              Home
            </a>
            <a href="#">Detail</a>
            <a href="#">Pages</a>
            <a href="#">Elements</a>
          </div>
          <div>
            <h1 className="sm:text-xl text-3xl font-[900] sm:text-gray-800 text-black">
              Shop
            </h1>
          </div>
          <div className="md:flex hidden lg:gap-12 gap-6 text-xs text-gray-800">
            <span className="flex gap-1 items-center">
              <FiSearch className="text-sm" />
              search
            </span>
            <button
              className="flex gap-1 items-center text-md relative"
              onClick={() => setShowCart(true)}
            >
              <BsCart2 className="text-sm" />
              <p className="uppercase">cart</p>
              {cart.length > 0 && (
                <span className="absolute -top-4 left-14 px-[5px] py-[1px] rounded-md bg-gray-800 text-white text-xs">
                  {totalQuantity}
                </span>
              )}
            </button>

            <div className="flex flex-col">
              <button
                className="flex gap-1 items-center"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <HiUserCircle className="text-lg" />
                <p className="uppercase"> {user?.firstName}</p>
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
          <div className="flex items-center md:hidden gap-5 sm:text-xl text-3xl sm:text-gray-800 text-black">
            <button>
              <BsCart2 />
            </button>
            <button>
              <HiUserCircle />
            </button>
            <button onClick={()=> setShowSideBar(!showSideBar)}>
              {showSideBar? <ImMenu4/> : <ImMenu3/>}
            </button>
          </div>
        </div>

        <Cart showCart={showCart} setShowCart={setShowCart} />
      </nav>
    </>
  );
};

export default Navbar;
