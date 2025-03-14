import React from 'react';
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa';

const BrandLogo = () => {
    return (
        <div className="bg-r-info-card py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Our Trusted Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center logo-container">
          {/* Google */}
          <div className="flex flex-col items-center">
            <FaGoogle className="text-5xl text-red-500" />
            <span className="mt-2 font-semibold">Google</span>
          </div>
          {/* Microsoft */}
          <div className="flex flex-col items-center">
            <FaMicrosoft className="text-5xl text-blue-600" />
            <span className="mt-2 font-semibold">Microsoft</span>
          </div>
          {/* Apple */}
          <div className="flex flex-col items-center">
            <FaApple className="text-5xl text-gray-800" />
            <span className="mt-2 font-semibold">Apple</span>
          </div>
          {/* Amazon */}
          <div className="flex flex-col items-center">
            <FaAmazon className="text-5xl text-yellow-600" />
            <span className="mt-2 font-semibold">Amazon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;