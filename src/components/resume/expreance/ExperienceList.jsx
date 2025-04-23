import React, { useContext } from "react";
import ExperienceForm from "./ExperienceForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const ExperienceList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const addExperience = (newExperience) => {
    const updatedExperiences = [...resumeData.experience, newExperience];
    updateSection("experience", updatedExperiences);
  };

  const deleteExperience = (indexToDelete) => {
    const updatedExperiences = resumeData.experience.filter((_, index) => index !== indexToDelete);
    updateSection("experience", updatedExperiences);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 mt-4">
        <ExperienceForm addExperience={addExperience} />
      </div>

      {resumeData.experience?.length > 0 && (
        <div className="mt-6">
          {resumeData.experience.map((exp, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm relative"
            >
              <button
                onClick={() => deleteExperience(index)}
                className="absolute top-2 right-2 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
              >
                Delete
              </button>
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p>{exp.position}</p>
              <p>{exp.startMonth} - {exp.endMonth}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceList;
