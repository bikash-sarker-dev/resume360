import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";

const NavbarDashboard = () => {
  return (
    <div className="bg-r-info-card p-4">
      <div className="flex gap-5 items-center justify-between lg:justify-normal">
        {/* search part start  */}
        <div className="lg:w-[70%] w-64 hidden sm:block sm:flex gap-2">
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

        {/* notification indicator part  */}
        <div className="xl:w-[20%] w-72 space-x-4 text-center">
          <div className="indicator">
            <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
              12
            </span>

            <button className="btn btn-circle bg-r-info border-r-accent hover:bg-r-primary text-r-text">
              <IoIosNotificationsOutline className="text-2xl" />
            </button>
          </div>
          <div className="indicator">
            <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
              9
            </span>

            <button className="btn btn-circle bg-r-info border-r-accent hover:bg-r-primary text-r-text">
              <LuMessageCircleMore className="text-2xl opacity-70" />
            </button>
          </div>
          <div className="indicator">
            <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
              5
            </span>

            <button className="btn btn-circle bg-r-info border-r-accent hover:bg-r-primary text-r-text">
              <IoSettingsOutline className="text-2xl opacity-70 " />
            </button>
          </div>
        </div>

        <div className="divider divider-horizontal m-0"></div>

        {/* user setting part  */}
        <div className="w-[10%] flex items-center   gap-4 pr-4">
          <h4 className="font-semibold opacity-80 hidden  xl:block ">
            Bikash Sarker
          </h4>
          <div className="avatar">
            <div className="w-12 h-12  rounded-full">
              <img src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
