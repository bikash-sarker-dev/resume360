import React, { useState } from "react";
import EducationForm from "./EducationForm";
import EducationCard from "./EducationCard";
import { Button } from "@mui/material";

const EducationList = () => {
  const [educations, setEducations] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addEducation = (newEducation) => {
    console.log("Added Education:", newEducation);
    setEducations([...educations, newEducation]);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">Add Education</h2>

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {educations.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationList;
