import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul className="flex gap-5 bg-cyan-600 py-3">
        <li>
          <Link to="/">Home</Link>
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
