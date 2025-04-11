import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router";

const MobileNavbar = () => {
    return (
        <>
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-r-primary border-t border-gray-200 text-white z-50">
                <div className="flex justify-around items-center p-3">
                    {/* Drawer Button */}
                    <label htmlFor="my-drawer-2" className="relative">
                        <FaBars className="text-2xl" />
                    </label>

                    {/* Notification Button */}
                    <label className="relative">
                        <IoIosNotificationsOutline className="text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-r-secondary text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                            12
                        </span>
                    </label>

                    {/* Message Button */}
                    <label className="relative">
                        <LuMessageCircleMore className="text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-r-secondary text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                            9
                        </span>
                    </label>

                    {/* Settings Button */}
                    <label className="relative">
                        <IoSettingsOutline className="text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-r-secondary text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
                            5
                        </span>
                    </label>
                    {/* Home Button */}
                    <NavLink to="/" className="relative">
                        <GoHome className="text-2xl" />
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;