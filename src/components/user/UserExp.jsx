import React from 'react';

const UserExp = () => {
    const experience = {
        company: "ABC Company",
        duration: "Jan 2020 - Dec 2022",
        position: "Front-End Developer",
        description: "Worked on various web projects using React and Tailwind CSS.",
      };
    return (
        <div className="">
  
        <div className="">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
            <span className="text-sm text-gray-500">{experience.duration}</span>
          </div>
          <p className="text-base text-blue-600 font-semibold">{experience.position}</p>
          <p className="text-gray-700 mt-2">{experience.description}</p>
        </div>
      </div>
  
    );
};

export default UserExp;