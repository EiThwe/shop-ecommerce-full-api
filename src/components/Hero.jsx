import React from "react";
import {HiOutlineArrowRight} from "react-icons/hi"

const Hero = () => {
  return (
    <div className="max-w-[1024px] h-screen mx-auto flex gap-10 justify-between items-start">
      <div className="w-72 h-full flex flex-col gap-4 justify-center items-center">
        <h1 className="uppercase text-4xl font-bold">decorative furniture</h1>
        <p className="text-sm text-gray-400">Lorem ipsum is simply dummy text of the printing and typesettin industry.</p>
        <div className="w-full">
          <button className="w-1/2 px-2 py-3 text-xs uppercase text-white bg-gray-800">buy now</button>
          <button className="w-1/2 px-2 py-3 text-xs uppercase text-gray-800 font-bold"><span className="flex gap-2 items-center justify-center">Learn More<HiOutlineArrowRight className="text-md"/></span></button>
        </div>
      </div>
      <div className="w-3/5 h-full flex justify-center items-center">
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
