import React, { useState } from "react";
import Lottie from "lottie-react";
import forgetPasswordLottieData from "../assets/animation/forget-password.json"
import { Link } from "react-router";

const ForgetPasswordPage = () => {
  return <div className="container pb-8 pt-24 lg:pb-12">
  <div className="hero bg-background">
 <div className="hero-content flex-1 flex-col-reverse lg:flex-row gap-10">

   <div className="card w-full md:w-9/12 lg:w-6/12 shadow-2xl">
     <div className="card-body">
       <h2 className="text-xl lg:text-2xl font-bold">Forget Password</h2>
       <p className="w-full mx-auto lg:mx-0 my-2">
        Enter your email address below to receive a passowrd reset link.</p>
      <form>
      <fieldset className="fieldset">
         <label className="fieldset-label">Email</label>
         <input type="email" name="email" className="input w-full" placeholder="Enter Your Email" />
         <button className="btn bg-r-accent mt-4 text-white">Send Reset Email</button>
       </fieldset>
        <p className="text-center mt-4">Remember Your Password? <span className="underline"><Link to='/login' className="text-r-accent">Login</Link></span>
             </p>
      </form>
     </div>
   </div>
   <div className="w-9/12 md:w-7/12 lg:w-6/12">
    <Lottie animationData={forgetPasswordLottieData}></Lottie>
   </div>
   
 </div>
</div>
   
 </div>;
};

export default ForgetPasswordPage;
