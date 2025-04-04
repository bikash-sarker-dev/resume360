import React, { useState } from "react";
import {TextField } from "@mui/material";

const ExperienceForm = ({ addExperience }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (company && position && duration) {
      addExperience({ company, position, duration, description });
      setCompany("");
      setPosition("");
      setDuration("");
      setDescription("");
    }
  };

  return (
      <from className="grid gap-4">
        <TextField
          label="Company Name"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <TextField
          label="Position"
          fullWidth
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <TextField
          label="Duration (e.g., Jan 2020 - Dec 2023)"
          fullWidth
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button className="cursor-pointer rounded-full text-white bg-r-primary py-2 px-5" onClick={handleSubmit} variant="contained" color="primary">
            Add
          </button>
        </div>
      </from>
  );
};

export default ExperienceForm;
