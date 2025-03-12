import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-r-secondary">
      <ul className=" container flex gap-5  text-xl py-3">
        <li>
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
