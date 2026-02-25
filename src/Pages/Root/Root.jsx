import React, { useEffect } from "react";
import Header from "../../component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      document.title = "Law.BD";
    } else if (path === "/booking") {
      document.title = "Booking";
    } else if (path === "/contact_us") {
      document.title = "Contact Us";
    } else if (path === "/emergency") {
      document.title = "Emergency";
    } else if (path === "/blog") {
      document.title = "Blog";
    } else if (path.startsWith("/doctordetails/")) {
      document.title = "Doctor Details";
    }
  }, [location]);
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
