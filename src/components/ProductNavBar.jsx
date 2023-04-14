import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { shopCategories } from "../utils/data";

const ProductNavBar = () => {
  return (
    <nav className=" bg-white px-10 py-10 shadow-sm uppercase font-bold w-full sm:overflow-x-hidden overflow-x-scroll">
      <div className="flex sm:gap-5 gap-10 justify-between items-center w-auto flex-nowrap">
        <div className="flex sm:gap-5 gap-10 sm:text-xs text-[10px]  text-gray-400 flex-nowrap">
          {shopCategories.map((category, index) => (
            <a
              href="#"
              className="hover:text-gray-800 whitespace-nowrap"
              key={index}
            >
              {category.name}
            </a>
          ))}
        </div>
        <div className="flex gap-10 sm:text-xs text-[10px] text-gray-800 sm:pr-0 pr-10">
          <span className="hover:cursor-pointer flex items-center gap-2">
            filter
            <IoIosArrowDown />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default ProductNavBar;
