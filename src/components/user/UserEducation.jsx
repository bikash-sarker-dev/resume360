import React from "react";

const UserEducation = () => {
  const educationData = [
    {
      school: "Daffodil International University",
      degree: "B.Sc",
      field: "CSE",
      startDate: "2021-04",
      endDate: "2025-04",
      grade: "3.65",
      description:
        "Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu",
    },
  ];
  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>

      {educationData.map((edu, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-5 mb-4 shadow-sm bg-white"
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.school}
            </h3>
            <span className="text-sm text-gray-500">
              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
            </span>
          </div>
          <p className="text-blue-600 font-medium">
            {edu.degree} in {edu.field}
          </p>
          <p className="text-sm text-gray-600 mb-1">GPA: {edu.grade}</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            {edu.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserEducation;
