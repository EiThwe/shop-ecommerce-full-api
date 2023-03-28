import React from "react";

const Card = () => {
  return (
    <div className="w-72 bg-white p-5 sm:hover:shadow-2xl sm:hover:-translate-y-1 transition-all duration-100 ease-in-out">
      <img
        src="https://i.postimg.cc/KcM3ZvD2/favpng-table-chair-seat-matbord-furniture.png"
        alt=""
        className="w-full h-full"
      />

      <div className="flex flex-col items-center gap-2 w-full">
        <h1 className="uppercase text-center font-bold text-[16px] text-gray-800">
          Matboard Furniture
        </h1>
        <p className="truncate w-full text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam
          commodi maxime ut eaque rerum ad error, debitis similique quae,
          excepturi dolores eligendi laudantium iste laborum nesciunt mollitia,
          perferendis nobis.
        </p>
        <p className=" font-bold text-[14px] text-gray-800">Price: $2000</p>
        <button className="py-2 px-3 w-15 h-10 border border-gray-800 text-xs">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
