import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

const NavbarDashboard = () => {
  return (
    <div>
      <div className="flex gap-5">
        <div className="w-4/5 flex gap-2">
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="w-full"
              type="search"
              required
              placeholder="Search"
            />
          </label>
          <button className="btn">Search</button>
        </div>
        <div className="w-1/6">
          <div className="indicator">
            <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
              12
            </span>
            <button className="btn">
              <IoIosNotificationsOutline />
            </button>
          </div>
        </div>
        <div className="w-1/6">
          <h4>user name</h4>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
