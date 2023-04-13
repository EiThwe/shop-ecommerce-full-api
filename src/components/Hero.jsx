import React from "react";
import {HiOutlineArrowRight} from "react-icons/hi"

const Hero = () => {
  return (
    <div className="max-w-[1024px] lg:h-screen py-[100px] mx-auto flex md:flex-row flex-col gap-10 md:justify-between justify-center 
    lg:items-start items-center
    ">
      <div className="md:w-72 w-full lg:h-full flex flex-col gap-4 justify-center items-center sm:mx-[45px] px-[10px]">
        <h1 className="uppercase text-4xl font-bold text-center sm:text-start">decorative furniture</h1>
        <p className="md:text-sm sm:text-[13px] text-sm text-gray-400 text-center md:text-start md:w-full sm:w-8/12 w-full">Lorem ipsum is simply dummy text of the printing and typesettin industry.</p>
        <div className="md:w-full w-72">
          <button className="w-1/2 px-2 py-3 text-xs uppercase text-white bg-gray-800">buy now</button>
          <button className="w-1/2 px-2 py-3 text-xs uppercase text-gray-800 font-bold"><span className="flex gap-2 items-center justify-center">Learn More<HiOutlineArrowRight className="text-md"/></span></button>
        </div>
      </div>
      <div className="sm:w-3/5 w-full lg:h-full flex justify-center items-center">
        <img
          src="https://shop-ecommerce-fullstack-react.vercel.app/static/media/hero-img.e8ee4b23f53f15915a6f.png"
          className="w-full "
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
