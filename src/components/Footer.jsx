import React from "react";
import { footerData } from "../utils/data";

const Footer = () => {
  return (
    <div className="pt-20 pb-8 max-w-[1024px] mx-auto px-3">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 w-full h-full">
        {footerData.map(({ title, data }, index) => (
          <div className="flex sm:justify-center justify-start" key={index}>
            <div className="flex flex-col gap-5 items-start">
              <h1 className="text-lg font-bold text-gray-800">{title}</h1>
              <div className="flex flex-col gap-3 items-start">
                {data.map((item, index) => (
                  <a href="#" key={index} className="xxs:text-sm text-[12px] text-gray-500">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="w-full h-[2px] bg-gray-400 mt-[80px] mb-[35px]"/>
      <p className="xxs:text-xs text-[8px] text-gray-400">Copy Right &#169; 2022 MMS IT.All Rights Reserved</p>
    </div>
  );
};

export default Footer;
