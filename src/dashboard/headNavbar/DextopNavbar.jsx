import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";

const DextopNavbar = () => {
  return (
    <>
      <div className="bg-r-primary p-4 hidden lg:block">
        <div className="flex gap-5 items-center justify-between">
          {/* Search bar */}
          <div className="w-[70%] flex gap-2">
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

          {/* Notifications, Messages, Settings */}
          <div className="flex space-x-4">
            <div className="indicator">
              <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
                12
              </span>
              <button className="w-11 h-11 border flex justify-center items-center border-r-background hover:bg-r-info transition-all duration-300 cursor-pointer rounded-full">
                <IoIosNotificationsOutline className="text-2xl text-r-background" />
              </button>
            </div>
            <div className="indicator">
              <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
                9
              </span>
              <button className=" w-11 h-11 border flex justify-center items-center border-r-background hover:bg-r-info transition-all duration-300 cursor-pointer rounded-full">
                <LuMessageCircleMore className="text-2xl text-r-background" />
              </button>
            </div>
            <div className="indicator">
              <span className="indicator-item badge w-6 h-6 text-r-text bg-r-primary rounded-full">
                5
              </span>
              <button className=" w-11 h-11 border flex justify-center items-center border-r-background hover:bg-r-info transition-all duration-300 cursor-pointer rounded-full">
                <IoSettingsOutline className="text-2xl text-r-background" />
              </button>
            </div>
          </div>

          {/* User */}
          <div className="flex items-center gap-4 pr-4">
            <h4 className="font-semibold opacity-80 hidden xl:block">
              Bikash Sarker
            </h4>
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
                <img src="https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DextopNavbar;
