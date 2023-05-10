import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/service/cartSlice";
import { GrCart } from "react-icons/gr";

const Card = ({ product }) => {
  const { cart } = useSelector((state) => state.cartSlice);
  
  // const totalQuantity = cart.reduce((pv, cv) => pv + cv.quantity, 0);
  const isExist = cart?.find((item) => item.id === product.id);
  // console.log(cart);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" bg-gray-100 p-5 sm:hover:shadow-2xl sm:hover:-translate-y-1 transition-all duration-100 ease-in-out relative">
      <div className="w-full h-[275px] flex justify-center items-center">
      <img src={product?.images[0]} alt="" className="w-full" />
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <h1 className="uppercase text-center font-bold text-[16px] text-gray-800">
          {product?.title}
        </h1>
        <p className="truncate w-full text-xs text-gray-400 text-center">
          {product?.description}
        </p>
        <p className=" font-bold text-[14px] text-gray-800">
          Price:{product?.price}
        </p>
        <button
          className="py-2 px-3 w-15 h-10 border rounded-sm border-gray-800 text-xs hover:text-white hover:bg-gray-800"
          onClick={addToCartHandler}
        >
          ADD TO CART
        </button>
      </div>
     {isExist &&  <div className="absolute top-5 right-5">
        <div className="relative text-center">
          <GrCart className="text-gray-800 opacity-100 text-2xl" />
          <span className="absolute -top-3 -right-3 text-white bg-gray-800 w-4 h-4 rounded-full text-[8px] flex items-center justify-center">
            {isExist.quantity}
          </span>
        </div>
      </div>}
    </div>
  );
};

export default Card;
