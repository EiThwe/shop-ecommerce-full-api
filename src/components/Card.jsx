import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/service/cartSlice";

const Card = ({product}) => {
  const dispatch = useDispatch()
  const addToCartHandler = ()=>{
    dispatch(addToCart(product));
  }
  return (
    <div className="w-72 bg-gray-100 p-5 sm:hover:shadow-2xl sm:hover:-translate-y-1 transition-all duration-100 ease-in-out">
      <img
        src={product?.images[0]}
        alt=""
        className="w-full h-full"
      />

      <div className="flex flex-col items-center gap-3 w-full">
        <h1 className="uppercase text-center font-bold text-[16px] text-gray-800">
         {product?.title}
        </h1>
        <p className="truncate w-full text-xs text-gray-400">
         {product?.description}
        </p>
        <p className=" font-bold text-[14px] text-gray-800">Price:{product?.price}</p>
        <button className="py-2 px-3 w-15 h-10 border rounded-sm border-gray-800 text-xs hover:text-white hover:bg-gray-800" onClick={addToCartHandler}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Card;
