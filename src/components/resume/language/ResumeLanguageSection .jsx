import React, { useContext } from "react";
import Language from "./Language";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const ResumeLanguageSection = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const handleAddLanguage = (lang) => {
    updateSection("languages", [...(resumeData.languages || []), lang]);
  };

  const handleDeleteLanguage = (indexToDelete) => {
    const updatedLanguages = resumeData.languages?.filter((_, index) => index !== indexToDelete) || [];
    updateSection("languages", updatedLanguages);
  };

  return (
    <div className="p-4">
      <Language onAddLanguage={handleAddLanguage} />

      {/* Language List */}
      {resumeData.languages?.length > 0 && (
        <div className="mt-6">
          {resumeData.languages.map((item, index) => (
            <div
              key={index}
              className="mb-3 p-4 border border-gray-300 rounded-lg shadow-sm relative"
            >
              <button
                onClick={() => handleDeleteLanguage(index)}
                className="absolute top-2 right-2 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
              >
                Delete
              </button>
              <p className="font-semibold">{item.language}</p>
              <p className="text-sm text-gray-600">{item.proficiency}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumeLanguageSection;
