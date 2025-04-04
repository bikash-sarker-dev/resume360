import React, { useContext } from "react";
import EducationForm from "./EducationForm";
import SectionHead from "../../header/section-head/SectionHead";
import LivePreview from "../live-preview/LivePreview";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const EducationList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);

  const addEducation = (newEducation) => {
    const updatedEducation = [...resumeData.education, newEducation];
    updateSection("education", updatedEducation);
  };

  return (
    <div className="p-4">
      <SectionHead
        subTitle={"Add your education information"}
        title={"Add Education"}
      />
      {/* Education Cards */}
      <div className="grid grid-cols-2">
        <EducationForm
          addEducation={addEducation}
        />
        <div>
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default EducationList;
