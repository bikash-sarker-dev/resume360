import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaCloudDownloadAlt, FaUsers } from "react-icons/fa";

const StatusCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 ">
      {/* card 1  */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-indigo-700 p-2 rounded-md">
            <CiDollar className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">$10,120</h2>
            <p className="text-gray-500 text-sm mt-1">Total Amount</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-500">
            <span>TARGET</span>
            <span>60%</span>
          </div>

          <progress
            className="progress progress-primary "
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      {/* card 2  */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-green-400 p-2 rounded-md">
            <FaUsers className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">+235</h2>
            <p className="text-gray-500 text-sm mt-1">All Users</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-500">
            <span>TARGET</span>
            <span>40%</span>
          </div>

          <progress
            className="progress progress-success "
            value="40"
            max="100"
          ></progress>
        </div>
      </div>
      {/* card 3  */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-sky-500 p-2 rounded-md">
            <FaUsers className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">+114</h2>
            <p className="text-gray-500 text-sm mt-1">Premium Users</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-500">
            <span>TARGET</span>
            <span>90%</span>
          </div>

          <progress
            className="progress progress-info "
            value="90"
            max="100"
          ></progress>
        </div>
      </div>
      {/* card 4  */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-r-primary p-2 rounded-md">
            <FaCloudDownloadAlt className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">+2107</h2>
            <p className="text-gray-500 text-sm mt-1">Download Status</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-500">
            <span>TARGET</span>
            <span>70%</span>
          </div>

          <progress
            className="progress progress-accent "
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
