import React from "react";
import { Outlet } from "react-router";
import NavbarDashboard from "../dashboard/headNavbar/NavbarDashboard";
import Sidebar from "../dashboard/sideBar/Sidebar";
import useAuth from "./../hooks/useAuth";

const DashboardLayouts = () => {
  const { loading } = useAuth();
  if (loading) {
    return <h2>loading....................!</h2>;
  }
  return (
    <main>
      <div className="flex">
        {/* side bar start  */}
        {/* <div className="w-auto "> */}
        <div className="w-auto lg:w-64 lg:fixed lg:top-0 lg:left-0 lg:h-screen ">
          <Sidebar />
        </div>
        {/* dashboard body part  */}
        {/* <div
          className=" w-[100%]
        "
        > */}
        <div className="w-full lg:ml-64 lg:w-[calc(100%-16rem)]">
          <NavbarDashboard />
          <div className="min-h-screen bg-r-card">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayouts;
