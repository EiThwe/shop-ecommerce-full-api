import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const Hero1 = () => {
  return (
    <div
      className="max-w-[1024px] py-[50px]  mx-auto flex md:flex-row flex-col gap-10 md:justify-between justify-center 
     items-center
    "
    >
      <div className="sm:w-3/5 w-full flex justify-center items-center">
        <div className="max-w-[350px]">
        <img
          src="https://shop-ecommerce-fullstack-react.vercel.app/static/media/award.bf08829e206d16a0b7e4.png"
          className=""
          alt="w-full"
        />
        </div>
      </div>
      <div className="md:max-w-[450px] max-w-[400px] flex flex-col gap-4 justify-center md:items-center items-start sm:mx-[45px] px-[10px]">
        <h1 className="uppercase text-2xl font-bold text-start ">
          design award 2017 now open for entries
        </h1>
        <p className="md:text-sm sm:text-[13px] text-sm text-gray-400 text-start w-full">
          Lorem ipsum is simply dummy text of the printing and typesettin
          industry.
        </p>
        <div className="md:w-full xs:w-72 w-full">
          <button className="w-1/2 px-2 py-3 text-xs uppercase text-white bg-gray-800">
            buy now
          </button>
          <button className="w-1/2 px-2 py-3 text-xs uppercase text-gray-800 font-bold">
            <span className="flex gap-2 items-center justify-center">
              Learn More
              <HiOutlineArrowRight className="text-md" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
