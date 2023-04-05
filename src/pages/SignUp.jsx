import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../feature/api/authApi";
import { countries, days, months, years } from "../utils/data";
import {Link} from "react-router-dom";

const SignUp = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [region, setRegion] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [email_confirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");
  const [signup] = useSignupMutation();
  const nav = useNavigate("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const birthDate = `${day}/${month}/${year}`;
    const user = {
      firstName: first_name,
      lastName: last_name,
      birthDate,
      region,
      gender,
      email,
      email_confirm,
      password,
      password_confirm,
    };
    const {data} = await signup(user);
    console.log(data);
    if(data?.success){
      nav("/login");
    }
  };

  return (
    <div className=" w-screen min-h-screen flex justify-center bg-gray-200 p-5">
      <div className=" flex flex-col gap-3">
        <h1 className="text-center text-2xl font-semibold uppercase text-gray-800">
          Shop
        </h1>
        <h1 className="text-center text-2xl text-gray-700">
          Sign Up To Your Account
        </h1>
        <form
          onSubmit={onSubmitHandler}
          action=""
          className="bg-white shadow-md w-[500px] p-10 text-gray-700 flex flex-col gap-5"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
                className="w-full bg-gray-200 border border-gray-300 h-10"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                className="w-full bg-gray-200 border border-gray-300 h-10"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date_of_birth" className="">
              Date Of Birth
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <select
                  className="w-full h-10 border border-gray-300 bg-gray-200"
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option value="" selected hidden disabled>
                    Day
                  </option>
                  {days.map((day) => (
                    <option value={day}>{day}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="w-full h-10 border border-gray-300 bg-gray-200"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option value="" selected hidden disabled>
                    Month
                  </option>
                  {months.map((month) => (
                    <option value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  className="w-full h-10 border border-gray-300 bg-gray-200"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="" selected hidden disabled>
                    Year
                  </option>
                  {years.map((year) => (
                    <option value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="region">Region</label>
            <div>
              <select
                name="region"
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-gray-200 border border-gray-300 h-10"
                id=""
              >
                {countries.map((country) => (
                  <option value={country}>{country}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Gender</label>
            <div className="grid grid-cols-3">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  className="w-5 h-5 accent-gray-600"
                />{" "}
                Male
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  className="w-5 h-5 accent-gray-600"
                />{" "}
                Female
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="undisclosed"
                  onChange={(e) => setGender(e.target.value)}
                  className="w-5 h-5 accent-gray-600"
                />{" "}
                Undisclosed
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-10 bg-gray-200 border border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Comfirm Email Address</label>
            <input
              type="email"
              value={email_confirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
              className="w-full h-10 bg-gray-200 border border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-10 bg-gray-200 border border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              value={password_confirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full h-10 bg-gray-200 border border-gray-300"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-3 py-2 w-full my-3"
          >
            SIGN UP
          </button>
          <div className="flex justify-between items-center">
          <p className="text-gray-600">Have an account already?</p>
          <Link to="/login">
            <p className="underline text-gray-800 hover::text-white hover:cursor-pointer">Log In</p>
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
