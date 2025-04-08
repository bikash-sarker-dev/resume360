import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import { FaEdit } from "react-icons/fa";

const User = () => {
  const {user} = useAuth()
  console.log(user)

  const getActiveClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-blue-600";
  return <>
    <div className="min-h-screen  bg-r-background">
      <div className="h-[400px] bg-r-info"></div>
      <div className="container">
        <div className=" min-h-[600px] bg-r-card w-10/12 mx-auto rounded-3xl shadow-2xl relative top-[-200px]">
           <div className="text-center relative  top-[-100px]  flex justify-center flex-col items-center">
           <img src={user?.photoURL} alt="profile picture"  className=" w-[200px] h-[200px] rounded-full shadow-xl object-cover"/>
          

           <div className="text-center mt-7 space-y-3">
            <h2 className=" font-bold text-2xl">User name </h2>
            <h2 className=""> Experience </h2>
            <h2 className="">you can setting your rsume from this </h2>
            <h2 className="font-bold text-xl">update resume*</h2>
           </div>

           <div className="space-x-4 mt-5 ">
            <NavLink to=''  end  className={getActiveClass}>
            about</NavLink>
            <NavLink to='/user/usereducation'  className={getActiveClass}>
            education</NavLink>
            <NavLink to='/user/userskill'  className={getActiveClass}>
            skill</NavLink>
            <NavLink to='/user/userexp'  className={getActiveClass}>
            experience</NavLink>
            <NavLink to='/user/userproject'  className={getActiveClass}>
            project</NavLink>
            <NavLink to='/user/userlink'  className={getActiveClass}>
            Link</NavLink>
           </div>

           <div className="min-h-[200px] w-11/12  bg-white text-left p-4 text-xl mt-10 rounded-3xl">
           <FaEdit></FaEdit>
              <Outlet></Outlet>
           </div>

           </div>
        </div>
      </div>

    </div>
  </>
};

export default User;
