import React, { useState } from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import { Button } from "@mui/material";
import SectionHead from "../../header/section-head/SectionHead";

const EducationList = () => {
  const [educations, setEducations] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addEducation = (newEducation) => {
    console.log("Added Education:", newEducation);
    setEducations([...educations, newEducation]);
  };

  return (
    <div className="p-4">
      <SectionHead
        subTitle={"Add your education information"}
        title={"Add Education"}
      />
      <div className="flex justify-center">
        {/* Open Modal Button */}
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
          {educations.map((edu, index) => (
            <EducationCard className="h-fit" key={index} education={edu} />
          ))}
        </div>
        <div>
          
          <img src="https://i.ibb.co.com/pBTDf678/Whats-App-Image-2025-03-20-at-13-20-15-8709966e.jpg" alt="resume" />
        </div>
      </div>
    </div>
  );
};

export default EducationList;
