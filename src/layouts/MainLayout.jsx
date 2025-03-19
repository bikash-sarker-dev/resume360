import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
