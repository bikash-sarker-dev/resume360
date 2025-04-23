import React, { useContext } from "react";
import Language from "./Language";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const ResumeLanguageSection = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const handleAddLanguage = (lang) => {
    updateSection("languages", [...(resumeData.languages || []), lang]);
  };

  return (
    <div>
      <Language onAddLanguage={handleAddLanguage} />
    </div>
  );
};

export default ResumeLanguageSection;
