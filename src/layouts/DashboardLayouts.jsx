import React from "react";
import { Outlet } from "react-router";
import NavbarDashboard from "../dashboard/headNavbar/NavbarDashboard";
import Sidebar from "../dashboard/sideBar/Sidebar";

const DashboardLayouts = () => {
  return (
    <main>
      <div className="flex">
        {/* side bar start  */}
        <div className="w-auto ">
          <Sidebar />
        </div>
        {/* dashboard body part  */}
        <div
          className="lg:w-[85%] w-[100%]
        "
        >
          <NavbarDashboard />
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayouts;
