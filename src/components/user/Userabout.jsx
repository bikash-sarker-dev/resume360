import React from "react";

const Userabout = () => {
  const userInfo = {
    fullName: "MD. ADNAN MAHMUD",
    phone: "01641378317",
    email: "adnan9mahmud@gmail.com",
    address: "Asulia, Dhaka",
    jobTitle: "Frontend Developer",
    profileImage:
      "blob:http://localhost:5173/2f6439db-1103-43fd-8504-7e1d54ece7fc",
    imageName: "unnamed.jpg",
    about:
      "Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu",
    dob: "2025-04-07",
    gender: "Male",
    nationality: "Bangladesh",
  };
  return (
    <div className="  p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row  gap-6">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800">
            {userInfo.fullName}
          </h1>
          <p className="text-blue-600 font-semibold text-lg">
            {userInfo.jobTitle}
          </p>

          <div className="mt-4 space-y-1 text-sm text-gray-600">
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {userInfo.phone}
            </p>
            <p>
              <strong>Address:</strong> {userInfo.address}
            </p>
            <p>
              <strong>Date of Birth:</strong> {userInfo.dob}
            </p>
            <p>
              <strong>Gender:</strong> {userInfo.gender}
            </p>
            <p>
              <strong>Nationality:</strong> {userInfo.nationality}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {userInfo.about}
        </p>
      </div>
    </div>
  );
};

export default Userabout;
