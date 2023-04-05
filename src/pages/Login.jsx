import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center bg-gray-200">
      <h1 className="text-2xl text-gray-800 text-center">
        Log In To Your Account
      </h1>
      <form
        action=""
        onSubmit={loginHandler}
        className="bg-white border rounded-md shadow-md w-96 p-5 flex flex-col gap-3"
      >
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 bg-gray-200 border border-gray-300 rounded"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-10 bg-gray-200 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-3 py-2 w-full h-10 bg-gray-800 text-white border rounded my-3"
        >
          LOG IN
        </button>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/signup">
            <p className="underline text-gray-800 hover:cursor-pointer">Sign Up</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
