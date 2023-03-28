import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-screen">
      <div className="max-w-[1024px] mx-auto h-full flex flex-col justify-center items-center">
        <div className="w-1/2 h-full flex flex-col justify-center items-start">
          <h1 className="uppercase text-4xl">decorative furniture</h1>
        </div>
        <div className="w-1/2"><img src="https://shop-ecommerce-fullstack-react.vercel.app/static/media/hero-img.e8ee4b23f53f15915a6f.png" className="w-full" alt="" /></div>
      </div>
    </div>
  );
};

export default Hero;
