import React, { useState, useContext } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceCard from "./ExperienceCard";
import SectionHead from "../../header/section-head/SectionHead";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";
import LivePreview from "../live-preview/LivePreview";


const ExperienceList = () => {
  const [openModal, setOpenModal] = useState(false);
  const { resumeData, updateSection } = useContext(ResumeContext);

  // Add experience and update context
  const addExperience = (newExperience) => {
    const updatedExperiences = [...resumeData.experience, newExperience];
    updateSection("experience", updatedExperiences);
  };

  return (
    <div className="p-4">
      <SectionHead
        subTitle={"Add your professional experiences"}
        title={"Add Experience"}
      />
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add Experience
        </button>
      </div>

      <ExperienceForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        addExperience={addExperience}
      />

      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {resumeData.experience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* LivePreview or FinalOutput */}
        <div>
          {/* <LivePreview /> */}
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
