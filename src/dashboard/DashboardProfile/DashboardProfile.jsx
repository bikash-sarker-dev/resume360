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
        
        <div className="p-4  rounded-md bg-r-info shadow-lg backdrop-blur-md">
          <img 
            src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" 
            className="rounded-md w-full" 
            alt="Profile" 
          />
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Work</h3>
            <p className="text-gray-700 mt-1">Spotify New York</p>
            <p className="text-gray-500 text-sm">170 William Street, NY</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Skills</h3>
            <p className="text-gray-700 mt-1">Branding, UI/UX, Web Design</p>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Jeremy Rose</h2>
              <p className="text-gray-500 flex items-center"><FaMapMarkerAlt className="mr-2" /> New York, NY</p>
              <p className="text-blue-500">Product Designer</p>
              <div className="flex items-center mt-2">
                <span className="text-lg font-bold">8.6</span>
                <div className="flex text-yellow-400 ml-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
            <button
            href="#_"
            className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-bold shadow-md text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full  rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
            <span className="relative">Contacts</span>
          </button>
          </div>

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
