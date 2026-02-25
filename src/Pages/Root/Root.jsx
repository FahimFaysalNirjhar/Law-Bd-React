import React from "react";
import Header from "../../component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Root;
