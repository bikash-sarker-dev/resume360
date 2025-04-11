import React from "react";
import { BiSolidLogInCircle } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import {
  MdAdminPanelSettings,
  MdOutlineSecurity,
  MdOutlineSecurityUpdate,
  MdPrivacyTip,
} from "react-icons/md";
const SecurityPage = () => {
  return (
    <div>
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Security Overview
        </h2>

        {/* User Roles & Permissions */}
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <div
            className="w-8 h-8 bg-blue-100 text-blue-600 
        flex items-center justify-center rounded-full font-bold"
          >
            <FaUser />
          </div>
          <div>
            <h3 className="text-lg font-medium">User Roles & Permissions</h3>
            <p className="text-sm text-gray-500">
              Admin, User, Editor - Access levels managed
            </p>
          </div>
        </div>

        {/* Authentication Settings */}
        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className="w-8 h-8 bg-blue-100 text-blue-600 
          flex items-center justify-center rounded-full font-bold"
            >
              <BiSolidLogInCircle />
            </div>
            <div>
              <h3 className="text-lg font-medium">Authentication</h3>
              <p className="text-sm text-gray-500">
                2FA enabled, session timeout active
              </p>
            </div>
          </div>
        </div>

        {/* API & Session Security */}
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full font-bold">
            <MdOutlineSecurityUpdate />
          </div>
          <div>
            <h3 className="text-lg font-medium">API & Session Security</h3>
            <p className="text-sm text-gray-500">
              Secure tokens, HTTPS enforced, CORS active
            </p>
          </div>
        </div>

        {/* Data Privacy */}
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <div
            className="w-8 h-8 bg-blue-100
         text-blue-600 flex items-center justify-center rounded-full 
         font-bold"
          >
            <MdPrivacyTip />
          </div>
          <div>
            <h3 className="text-lg font-medium">Data Privacy</h3>
            <p className="text-sm text-gray-500">
              Encrypted resumes, hashed passwords, user-only access
            </p>
          </div>
        </div>

        {/* Security Logs */}
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <div
            className="w-8 h-8 bg-blue-100 text-blue-600 flex
         items-center justify-center rounded-full font-bold"
          >
            <MdOutlineSecurity />{" "}
          </div>
          <div>
            <h3 className="text-lg font-medium">Security Logs</h3>
            <p className="text-sm text-gray-500">
              Recent logins, suspicious activities, admin actions
            </p>
          </div>
        </div>

        {/* Admin Controls */}
        <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
          <div
            className="w-8 h-8 bg-blue-100 text-blue-600 flex items-center
         justify-center rounded-full font-bold"
          >
            <MdAdminPanelSettings />
          </div>
          <div>
            <h3 className="text-lg font-medium">Admin Controls</h3>
            <p className="text-sm text-gray-500">
              Disable users, set IP restrictions, maintenance mode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
