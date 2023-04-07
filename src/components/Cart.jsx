import React from "react";
import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";
import CartDesign from "./CartDesign";

const Cart = ({ showCart, setShowCart }) => {
  const { cart } = useSelector((state) => state.cartSlice);
  const totalPrice = cart.reduce((pv, cv) => pv + cv.price * cv.quantity, 0);
  console.log(cart);
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 z-10 ${
        showCart
          ? "translate-x-[0] opacity-100"
          : "translate-x-[100%] opacity-0"
      } flex transition-all `}
    >
      <div className="w-3/5 h-full "></div>
      <div className="w-2/5 h-full">
        <div className="w-full h-full bg-white opacity-100 border-l border-gray-800 border-opacity-5 shadow-md rounded-tl-xl">
          <div className="w-full text-gray-800 p-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Cart</h1>
            <button className="text-xl px-3" onClick={() => setShowCart(false)}>
              <HiXMark />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {cart?.map((item) => (
              <CartDesign item={item} key={item.id} />
            ))}
          </div>

          {cart.length > 0 && (
            <div className="">
              <hr className="w-full h-[2px] bg-gray-800" />
              <div className="flex justify-between p-5">
                <h1 className="text-lg">Total</h1>
                <p className="text-lg">${totalPrice}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
