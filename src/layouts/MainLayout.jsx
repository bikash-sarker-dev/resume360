import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import LoadingPage from "../pages/LoadingPage";
import useAuth from "./../hooks/useAuth";

const MainLayout = () => {
  const { loading } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }
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
