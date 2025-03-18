import React from "react";
import { Outlet } from "react-router";
import NavbarDashboard from "../dashboard/headNavbar/NavbarDashboard";
import Sidebar from "../dashboard/sideBar/Sidebar";

const DashboardLayouts = () => {
  return (
    <main>
      <div className="grid grid-cols-12 ">
        {/* side bar start  */}
        <div className="col-span-2 ">
          <Sidebar />
        </div>
        {/* dashboard body part  */}
        <div
          className="col-span-10 ml-9 
        "
        >
          <NavbarDashboard />
          <div className="p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayouts;
