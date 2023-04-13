import Cookies from "js-cookie";
import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductNavBar from "../components/ProductNavBar";
import Products from "../components/Products";
import Cart from "../components/Cart";

const Dashboard = () => {
  const data = JSON.parse(Cookies.get("user"));
  console.log(data);
  return (
    <div className=" bg-gray-200">
      <Navbar />
      <Hero />
      <div className=" bg-white ">
        <ProductNavBar />
        <Products />
      </div>
    </div>
  )
};

export default Dashboard;
