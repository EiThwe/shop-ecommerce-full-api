import Cookies from "js-cookie";
import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const data = JSON.parse(Cookies.get("user"));
  console.log(data);
  return <div className="w-screen min-h-screen bg-gray-200">
   <Navbar/>
   {/* <Hero/> */}
  </div>;
};

export default Dashboard;