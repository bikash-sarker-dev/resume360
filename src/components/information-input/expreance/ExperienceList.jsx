import React, { useContext } from "react";
import ExperienceForm from "./ExperienceForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";



const ExperienceList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  // Add experience and update context
  const addExperience = (newExperience) => {
    const updatedExperiences = [...resumeData.experience, newExperience];
    updateSection("experience", updatedExperiences);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div>
          <ExperienceForm
            addExperience={addExperience}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
