import React from "react";
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../feature/service/cartSlice";

const CartDesign = ({ item }) => {
  const {id, images, title, price,quantity } = item;
  const dispatch = useDispatch();
  const removeHandler = ()=>{
    dispatch(removeFromCart(item))
  }
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between gap-3 items-center">
        <img src={images[0]} alt="" className="w-36 h-full" />
        <div className="flex flex-col gap-1 ">
          <h1 className="text-gray-500 text-sm">{title}</h1>
          <p className="text-gray-800 text-md">${price}</p>
          <button className="px-2 py-1 w-16 text-center rounded bg-red-600 text-white text-xs" onClick={removeHandler}>remove</button>
        </div>
      </div>
      <div className=" flex flex-col gap-3 justify-center items-center pr-10">
        <button onClick={()=> dispatch(increaseQuantity(item))}><IoMdArrowDropup/></button>
        <p className="text-center">{quantity}</p>
        <button onClick={()=> dispatch(decreaseQuantity(item))}><IoMdArrowDropdown/></button>
      </div>
    </div>
  );
};

export default CartDesign;
