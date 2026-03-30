// Layout.jsx
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
