import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {FaFacebookF,FaTwitter,FaGoogle} from "react-icons/fa";
import { useLoginMutation } from "../feature/api/authApi";
import { addUser } from "../feature/service/authSlice";
import {Link} from "react-router-dom"

const Login = () => {
  const [showLoading,setShowLoading] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("thwethwehtun@gmail.com");
  const [password, setPassword] = useState("1122334455");
  const [login] = useLoginMutation();
  const loginHandler = async (e) => {
    e.preventDefault();
    console.log("Reach Here");
    const user = { email, password };
    const { data } = await login(user);
    // setShowLoading(isLoading);
    dispatch(addUser({ user: data?.data, token: data?.token }));
    console.log(data);
    if (data?.success) {
      nav("/");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col gap-3 justify-center items-center bg-gray-200">
       <h1 className="text-2xl uppercase text-gray-900 font-extrabold text-center">
        Shop
      </h1>
      <h1 className="text-2xl font-bold text-gray-600 text-center">
        Log In To Your Account
      </h1>
      <form
        action=""
        onSubmit={loginHandler}
        className="bg-white border rounded-md shadow-md w-96 p-5 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 bg-gray-200 border border-gray-300 rounded p-2"
        />
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-10 bg-gray-200 border border-gray-300 rounded p-2"
        />
        </div>
        <div className="flex justify-between items-end text-xs">
          <div className="flex gap-1 items-center">
            <input type="checkbox" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="">
            Forget Your Password?
          </div>
        </div>
        <button
          type="submit"
          className="px-3 py-2 w-full h-10 bg-gray-800 text-white border uppercase rounded mt-3"
        >
          sign in
        </button>
        <div className="w-full border-b-[1px] border-gray-500 flex justify-center items-center my-4">
          <div className="h-[10px] bg-white translate-y-[4px] text-xs px-1 flex justify-center items-center">or Continue With</div>
        </div>
        <div className="grid grid-cols-3 gap-3 h-10 text-xl">
          <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-sm"><FaGoogle/></div>
          <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-sm"><FaFacebookF/></div>
          <div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-sm"><FaTwitter/></div>
        </div>
        <div className="flex justify-between items-center my-2">
          <p className="text-gray-600 text-xs">Don't have an account?</p>
          <Link to="/signup">
            <p className="underline text-gray-800 hover:cursor-pointer text-xs">Sign Up</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
