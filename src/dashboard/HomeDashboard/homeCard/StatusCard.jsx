import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaCloudDownloadAlt, FaUsers } from "react-icons/fa";

const StatusCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 ">
      {/* card 1 - Total Resumes Created */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-indigo-700 p-2 rounded-md">
            <CiDollar className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">1,120</h2>
            <p className="text-gray-700 text-sm mt-1">Resumes Created</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-700">
            <span>COMPLETION</span>
            <span>80%</span>
          </div>

          <progress
            className="progress progress-primary"
            value="80"
            max="100"
          ></progress>
        </div>
      </div>
      {/* card 2 - Total Users */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-green-400 p-2 rounded-md">
            <FaUsers className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">+540</h2>
            <p className="text-gray-700 text-sm mt-1">Registered Users</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-700">
            <span>GROWTH</span>
            <span>45%</span>
          </div>

          <progress
            className="progress progress-success"
            value="45"
            max="100"
          ></progress>
        </div>
      </div>
      {/* card 3 - Cover Letters Created */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-sky-500 p-2 rounded-md">
            <FaUsers className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">870</h2>
            <p className="text-gray-700 text-sm mt-1">Cover Letters Created</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-700">
            <span>COMPLETION</span>
            <span>70%</span>
          </div>

          <progress
            className="progress progress-info"
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      {/* card 4 - Downloads */}
      <div className="bg-r-hover hover:bg-r-secondary transition-all duration-300 shadow-md rounded-lg p-6 ">
        <div className="flex items-center justify-between gap-3">
          <div className="bg-r-primary p-2 rounded-md">
            <FaCloudDownloadAlt className="text-4xl text-r-background" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">3,460</h2>
            <p className="text-gray-700 text-sm mt-1">Total Downloads</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between text-sm text-gray-700">
            <span>DOWNLOAD RATE</span>
            <span>85%</span>
          </div>

          <progress
            className="progress progress-accent"
            value="85"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
