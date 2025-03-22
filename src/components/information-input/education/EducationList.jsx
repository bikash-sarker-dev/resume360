import React, { useContext, useState } from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import SectionHead from "../../header/section-head/SectionHead";
import LivePreview from "../live-preview/LivePreview";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const EducationList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);
  const [openModal, setOpenModal] = useState(false);

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

      <div className="flex justify-center">
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add Education
        </button>
      </div>

      {/* Modal Form */}
      <EducationForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        addEducation={addEducation}
      />

      {/* Education Cards */}
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {resumeData.education.map((edu, index) => (
            <EducationCard className="h-fit" key={index} education={edu} />
          ))}
        </div>

        {/* Live Preview */}
        <div>
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default EducationList;
