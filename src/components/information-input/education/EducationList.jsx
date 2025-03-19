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
    <div className="max-w-5xl mx-auto p-4">
      {/* Button to open Modal */}
      <div className="flex justify-end mb-6">
        <button
          className="rounded-full text-white bg-r-primary py-2 px-5"
          onClick={() => setOpenModal(true)}
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
