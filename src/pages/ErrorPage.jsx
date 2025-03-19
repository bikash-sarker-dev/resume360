import React from "react";
import errorLottieData from "../assets/animation/error.json"
import Lottie from "lottie-react";
import { Link } from "react-router";

const ErrorPage = () => {
  return <div>
  <div className='pb-10 my-7 text-center bg-[rgb(134,171,223,0.5)] text-[rgb(51,51,51)] w-10/12 mx-auto rounded-xl'>
    <div className="size-[500px] mx-auto">
    <Lottie animationData={errorLottieData}></Lottie>
    </div>
    <p className="text-5xl mb-4">Pages are not found</p>
    <p className='text-lg font-semibold'>Please go to - <Link to='/' className='border-b-2 text-[#6d81d9] border-[#6d81d9]'>Home</Link></p>
  </div>
  </div>;
};

export default ErrorPage;
