import Cookies from "js-cookie";
import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductNavBar from "../components/ProductNavBar";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Hero1 from "../components/Hero1";
import Footer from "../components/Footer";

const Dashboard = () => {
  const data = JSON.parse(Cookies.get("user"));
  console.log(data);
  return (
    <div className=" bg-[#ECECEE]">
      <Navbar />
      <Hero />
      <div className=" bg-white py-10 w-full">
        <ProductNavBar />
        <Products />
      </div>
      <Hero1/>
      <div className="bg-white"><Footer/></div>
    </div>
  )
};

export default Dashboard;
