import React from "react";
import NavbarDashboard from "../dashboard/headNavbar/NavbarDashboard";
import Sidebar from "../dashboard/sideBar/Sidebar";

const DashboardLayouts = () => {
  return (
    <main>
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 ">
          <Sidebar />
        </div>
        <div
          className="col-span-10 ml-10 p-5
        "
        >
          <NavbarDashboard />
          right side
        </div>
      </div>
    </main>
  );
};

export default DashboardLayouts;
