import React from "react";
import NavBar from "../component/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
