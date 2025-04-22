import Lottie from "lottie-react";
import React from "react";
import loadingFile from "../assets/loadingLottieFile/reusme-loading.json";

const LoadingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-60">
        <Lottie animationData={loadingFile} loop={true} />
      </div>
    </div>
  );
};

export default LoadingPage;
