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
          className="col-span-10 ml-9 
        "
        >
          <NavbarDashboard />
          <div className="p-10">right side</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardLayouts;
