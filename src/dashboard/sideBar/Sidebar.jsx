import React from "react";

import { FiUserCheck } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { GrShieldSecurity } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { IoChatboxEllipsesOutline, IoReaderOutline } from "react-icons/io5";
import { MdOutlineEditNotifications } from "react-icons/md";
import { RiUserSettingsLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useOrganizer from "../../hooks/useAdminManage";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { signOutUser, user, setUser } = useAuth();
  const navigate = useNavigate();
  const { admin } = useOrganizer();
  console.log(admin);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Logout successfully",
          icon: "success",
          confirmButtonText: "Done",
          confirmButtonColor: "#3e563f",
        });
        navigate("/");
        setUser(null);
      })
      .catch(() => {});
  };
  const navItemAdmin = [
    { to: "/dashboard/home", icon: <GoHome />, label: "Dashboard" },
    { to: "/dashboard/users", icon: <FiUserCheck />, label: "Users" },
    {
      to: "/dashboard/profile",
      icon: <RiUserSettingsLine />,
      label: "Profile",
    },
    // { to: "/dashboard/order-details", icon: <AiOutlineRead />, label: "Order Details" },
    { to: "/dashboard/reviews", icon: <IoReaderOutline />, label: "Reviews" },
    {
      to: "/dashboard/chat",
      icon: <IoChatboxEllipsesOutline />,
      label: "Chat",
    },
    {
      to: "/dashboard/security",
      icon: <GrShieldSecurity />,
      label: "Security",
    },
    {
      to: "/dashboard/notification",
      icon: <MdOutlineEditNotifications />,
      label: "Notification Setting",
    },
  ];
  const navItemsUser = [
    { to: "/dashboard/home", icon: <GoHome />, label: "Dashboard" },
    {
      to: "/dashboard/profile",
      icon: <RiUserSettingsLine />,
      label: "Profile",
    },
    {
      to: "/dashboard/chat",
      icon: <IoChatboxEllipsesOutline />,
      label: "Chat",
    },

    {
      to: "/dashboard/notification",
      icon: <MdOutlineEditNotifications />,
      label: "Notification Setting",
    },
  ];

  return (
    <div className="drawer z-50 lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* Sidebar for all screen sizes */}
      <div className="drawer-side lg:block">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <aside className="w-64 bg-r-primary min-h-screen p-4 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-r-text">Resume360</h2>
          </div>
          <ul className="space-y-2">
            {admin
              ? navItemAdmin.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-r-secondary text-white font-semibold"
                            : "hover:bg-r-secondary hover:text-white text-r-background"
                        }`
                      }
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-base">{item.label}</span>
                    </NavLink>
                  </li>
                ))
              : navItemsUser.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                          isActive
                            ? "bg-r-secondary text-white font-semibold"
                            : "hover:bg-r-secondary hover:text-white text-r-background"
                        }`
                      }
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-base">{item.label}</span>
                    </NavLink>
                  </li>
                ))}

            <li>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-r-background hover:bg-red-600 hover:text-white transition-all"
              >
                <IoIosLogOut className="text-2xl" />
                <span className="text-base">Log Out</span>
              </button>
            </li>

            <div className="divider bg-gray-600 h-[1px] my-2"></div>

            <li>
              <NavLink
                to="/"
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-r-secondary hover:text-white text-r-background transition-all"
              >
                <GoHome className="text-2xl" />
                <span className="text-base">Go to Home</span>
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
