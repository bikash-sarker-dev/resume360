import { useState } from "react";
import { FaSearch, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { FiMessageCircle, FiUsers, FiPhone, FiMail } from "react-icons/fi";

const Timeline = () => {
  return (
    <div className="mt-4 p-4 min-h-[236px]  rounded-md  bg-r-info shadow-lg backdrop-blur-sm">
      <h3 className="text-lg font-semibold">Career Progress</h3>
      <ul className="mt-2 space-y-3">
        <li className="border-l-4 border-blue-500 pl-4">Joined Spotify - 2019</li>
        <li className="border-l-4 border-green-500 pl-4">Promoted to Senior Designer - 2021</li>
        <li className="border-l-4 border-yellow-500 pl-4">Freelancing UX Projects - 2023</li>
      </ul>
    </div>
  );
};

const DashboardProfile = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-r-primary/5 pt-0 sm:pt-5 min-h-screen backdrop-blur-lg">
      
      <div className="max-w-5xl mx-auto p-6  shadow-md rounded-md grid md:grid-cols-3 gap-6 "> 
        
        

        <div className="md:col-span-2">
          

          <div className="flex space-x-4 border-b mt-4 pb-2">
            <button 
              className={`pb-2 font-semibold ${activeTab === "timeline" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"}`} 
              onClick={() => setActiveTab("timeline")}
            >
              Timeline
            </button>
            <button 
              className={`pb-2 font-semibold ${activeTab === "about" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700"}`} 
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
          </div>

          {activeTab === "about" ? (
            <div className="mt-4 p-4  rounded-md bg-r-info shadow-lg backdrop-blur-md">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <p className="flex items-center text-gray-600 mt-1"><FiPhone className="mr-2" /> +1 123 456 7890</p>
              <p className="flex items-center text-gray-600 mt-1"><FiMail className="mr-2" /> hello@jeremyrose.com</p>
              <p className="text-gray-600 mt-1">www.jeremyrose.com</p>
              <h3 className="text-lg font-semibold mt-4">Basic Information</h3>
              <p className="text-gray-600">Birthday: June 5, 1992</p>
              <p className="text-gray-600">Gender: Male</p>
            </div>
          ) : (
            <Timeline />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
