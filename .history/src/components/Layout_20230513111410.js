import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (

    <Header/>
    <Outlet/>
    <Footer/>Footer={}
  );
};

export default Layout;
