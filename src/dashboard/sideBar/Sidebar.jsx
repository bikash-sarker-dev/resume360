import React from "react";
import { AiOutlineRead } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import {
  IoChatboxEllipsesOutline,
  IoListOutline,
  IoReaderOutline,
} from "react-icons/io5";
import { MdOutlineEditNotifications } from "react-icons/md";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="drawer lg:drawer-open bg-r-primary lg:w-[265px] grid-cols-1 ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn bg-r-secondary drawer-button lg:hidden"
        >
          <FaBars className="text-xl" />
        </label>
      </div>

      <div className="drawer-side bg-r-primary min-h-screen pl-2">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" mt-5">
          <h2 className="text-3xl font-extrabold text-center text-r-text">
            Resume360
          </h2>
        </div>
        <ul className="menu text-base-content min-h-full w-80  space-y-4">
          {/* Sidebar content here */}
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/home"
            >
              <GoHome className="text-3xl " />{" "}
              <span className="text-[17px]">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/users"
            >
              <FiUserCheck className="text-3xl " />{" "}
              <span className="text-[17px]">Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/order-list"
            >
              <IoListOutline className="text-3xl " />{" "}
              <span className="text-[17px]">Order List</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/order-details"
            >
              <AiOutlineRead className="text-3xl " />{" "}
              <span className="text-[17px]">Order Details</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/reviews"
            >
              <IoReaderOutline className="text-3xl " />{" "}
              <span className="text-[17px]">Reviews</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/chat"
            >
              <IoChatboxEllipsesOutline className="text-3xl " />{" "}
              <span className="text-[17px]">Chat</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/security"
            >
              <GrShieldSecurity className="text-3xl " />{" "}
              <span className="text-[17px]">Security</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/notification"
            >
              <MdOutlineEditNotifications className="text-3xl " />{" "}
              <span className="text-[17px]">NotifiCation Setting</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/dashboard/users"
            >
              <IoIosLogOut className="text-3xl " />{" "}
              <span className="text-[17px]">LogOut</span>
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink
              className="text-r-background hover:bg-r-secondary hover:text-r-text py-2"
              to="/"
            >
              <IoIosLogOut className="text-3xl " />{" "}
              <span className="text-[17px]">Go to Home</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
