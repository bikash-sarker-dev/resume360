import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="font-bold text-lg">{experience.position}</h3>
      <p className="text-sm text-gray-600">{experience.company}</p>
      <p className="text-sm text-gray-500">{experience.duration}</p>
      {experience.description && (
        <p className="text-sm mt-2 text-gray-700">{experience.description}</p>
      )}
    </div>
  );
};

export default ExperienceCard;
