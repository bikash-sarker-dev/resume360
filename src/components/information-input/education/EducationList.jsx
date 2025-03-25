import React, { useContext } from "react";
import EducationForm from "./EducationForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const EducationList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const addEducation = (newEducation) => {
    const updatedEducation = [...resumeData.education, newEducation];
    updateSection("education", updatedEducation);
  };

  return (
    <div className="p-4">
      {/* Education Cards */}
      <div className="grid grid-cols-1">
        <EducationForm
          addEducation={addEducation}
        />
      </div>
    </div>
  );
};

export default EducationList;
