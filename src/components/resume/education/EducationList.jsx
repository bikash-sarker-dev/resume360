import React, { useContext } from "react";
import EducationForm from "./EducationForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const EducationList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const addEducation = (newEducation) => {
    const updatedEducation = [...resumeData.education, newEducation];
    updateSection("education", updatedEducation);
  };

  const deleteEducation = (indexToDelete) => {
    const updatedEducation = resumeData.education.filter((_, index) => index !== indexToDelete);
    updateSection("education", updatedEducation);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1">
        <EducationForm addEducation={addEducation} />
      </div>

      {resumeData.education?.length > 0 && (
        <div className="mt-6">
          {resumeData.education.map((edu, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm relative"
            >
              <button
                onClick={() => deleteEducation(index)}
                className="absolute top-2 right-2 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
              >
                Delete
              </button>
              <h3 className="text-lg font-semibold">{edu.school}</h3>
              <p>{edu.degree} in {edu.field}</p>
              <p>{edu.startDate} - {edu.endDate || "Present"}</p>
              <p>Grade: {edu.grade}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationList;
