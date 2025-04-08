import Lottie from "lottie-react";
import React from "react";
import resumeLottieData from "../assets/animation/resume2.json";
import Login from "../auth/login/Login";

const LoginPage = () => {
  return (
    <div className="container py-6 lg:pt-14 lg:pb-12">
      <div className="hero bg-background">
        <div className="hero-content flex-1 flex-col lg:flex-row w-full mx-auto lg:mx-0 gap-10">
          <div className="w-9/12 md:w-7/12 lg:w-6/12">
            <Lottie animationData={resumeLottieData}></Lottie>
          </div>
          <div className="card w-full md:w-7/12">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
