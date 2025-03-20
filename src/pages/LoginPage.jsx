import React from "react";
import { Link } from "react-router";
import Login from "../auth/login/Login";
import Lottie from "lottie-react";
import resumeLottieData from "../assets/animation/resume2.json"

const LoginPage = () => {

  return <div className="container py-8 lg:pt-24 lg:pb-12">
   <div className="hero bg-background">
  <div className="hero-content flex-1 flex-col lg:flex-row w-full mx-auto lg:mx-0 gap-10">
    <div className="w-9/12 md:w-7/12 lg:w-6/12">
    <Lottie animationData={resumeLottieData}></Lottie>
    </div>
  
    {/* <div className="text-center lg:text-left"> */}
    
      {/* <h1 className="text-3xl md:4xl lg:text-5xl font-bold">Seamless Login for Exclusive Access</h1>
      <p className="py-6 w-10/12 mx-auto lg:mx-0">
        Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortless access your account.</p>
        <p>Don't have an account? <span className="underline"><Link  to='/register' className="text-r-accent">Register here</Link></span>
        </p> */}
    {/* </div> */}
   <div className="card w-full md:w-7/12">
   <Login></Login>
   </div>
  </div>
</div> 
  </div>;
};

export default LoginPage;
