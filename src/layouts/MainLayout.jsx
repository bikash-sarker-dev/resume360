import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";

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
        <h1>footer</h1>
      </footer>
    </>
  );
};

export default MainLayout;
