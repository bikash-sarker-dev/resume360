import React from "react";
import errorLottieData from "../assets/animation/error.json"
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return <div>
  <div className='text-center text-[rgb(51,51,51)] w-10/12 mx-auto rounded-xl min-h-screen'>
    <div className="size-[520px] mx-auto pt-2">
    <Lottie animationData={errorLottieData}></Lottie>
    </div>
    <p className='text-lg font-semibold mt-6'>Please go to - <Link to='/' className='border-b-2 text-r-primary border-r-primary'>Home</Link></p>
  </div>
  </div>;
};

export default ErrorPage;
