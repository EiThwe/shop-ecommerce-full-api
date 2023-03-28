import Cookies from "js-cookie";
import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const data = JSON.parse(Cookies.get("user"));
  console.log(data);
  return (
    <div className="w-screen min-h-screen bg-gray-200">
      <Navbar />
      <Hero/>
      <div className="grid grid-cols-4 m-5">
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
