import React from "react";

const UserExp = () => {
  const experiences = [
    {
      company: "Empower Next Gen",
      position: "Designer Team Lead",
      startMonth: "2024-05",
      endMonth: "2025-01",
      description:
        "Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu Md Adnan Mahmjdu",
    },
    {
      company: "ABC Company",
      position: "Front-End Developer",
      startMonth: "2020-01",
      endMonth: "2022-12",
      description:
        "Worked on various web projects using React and Tailwind CSS.",
    },
  ];

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "short" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div className=" mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-5 mb-4 shadow-sm bg-white"
        >
          <div className="flex justify-between items-center mb-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {exp.company}
            </h3>
            <span className="text-sm text-gray-500">
              {formatDate(exp.startMonth)} - {formatDate(exp.endMonth)}
            </span>
          </div>
          <p className="text-blue-600 font-medium">{exp.position}</p>
          <p className="text-gray-700 mt-2 text-sm leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserExp;
