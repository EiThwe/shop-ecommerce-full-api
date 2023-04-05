import React from "react";

const CartDesign = ({ item }) => {
  const { images, title, price } = item;
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between gap-3 items-center">
        <img src={images[0]} alt="" className="w-36 h-full" />
        <div className="flex flex-col gap-1 ">
          <h1 className="text-gray-500 text-sm">{title}</h1>
          <p className="text-gray-800 text-md">${price}</p>
          <button className="px-2 py-1 w-16 text-center rounded bg-red-600 text-white text-xs">remove</button>
        </div>
      </div>
      <div className=" flex flex-col gap-3 justify-center items-center bg-red-500">
        <button>+</button>
        <p className="text-center">1</p>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartDesign;
