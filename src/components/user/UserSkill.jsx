import React from "react";

const UserSkill = () => {
  const skills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "Node.js",
    "MongoDB",
    "Express.js",
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-r-card text-r-info px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserSkill;
