import React from "react";
import { Link, Outlet } from "react-router";

const User = () => {
  return <>
    <div className="min-h-screen bg-r-background">
      <div className="h-[400px] bg-r-info"></div>
      <div className="">
        <div className=" h-[600px] bg-r-card w-10/12 mx-auto rounded-3xl shadow-2xl relative top-[-200px]">
           <div className="text-center relative  top-[-100px]  flex justify-center flex-col items-center">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhs1Z5SSVqH0w_4S8R4lnTj0O7Swn4NA5tA&s" alt="profile picture"  className=" w-[200px] h-[200px] rounded-full shadow-xl object-cover"/>
          

           <div className="text-center mt-7 space-y-3">
            <h2 className=" font-bold text-2xl">User name </h2>
            <h2 className=""> Experience </h2>
            <h2 className="">your profile 25% completed, pls complete your profile and download resume </h2>
            <h2 className="font-bold text-xl">update profile*</h2>
           </div>

           <div className="space-x-4 mt-5 ">
            <Link to=''>
            about</Link>
            <Link to='/user/usereducation'>
            education</Link>
            <Link to='/user/userskill'>
            skill</Link>
            <Link to='/user/userexp'>
            experience</Link>
            <Link to='/user/userproject'>
            project</Link>
            <Link to='/user/userlink'>
            Link</Link>
           </div>

           <div className="h-[200px] w-11/12  bg-white  mt-10 rounded-3xl">
              <Outlet></Outlet>
           </div>

           </div>
        </div>
      </div>

    </div>
  </>
};

export default User;
