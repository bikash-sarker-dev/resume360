import React from "react";
import MobileNavbar from "./MobileNavbar";
import DextopNavbar from "./DextopNavbar"
const NavbarDashboard = () => {
  return (
    <>
      {/* Desktop / Tablet Navbar */}
      <DextopNavbar/>

      {/* Mobile Bottom Navigation */}
      <MobileNavbar/>
    </>
  );
};

export default NavbarDashboard;
