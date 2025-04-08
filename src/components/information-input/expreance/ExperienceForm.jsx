import React, { useState } from "react";
import { TextField } from "@mui/material";

const ExperienceForm = ({ addExperience }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (company && position && startMonth && endMonth) {
      addExperience({ company, position, startMonth, endMonth, description });
      setCompany("");
      setPosition("");
      setStartMonth("");
      setEndMonth("");
      setDescription("");
    }
  };

  return (
    <form className="grid grid-cols-1 gap-4">
      <TextField
        label="Company Name"
        fullWidth
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
        helperText="Enter company name"
      />
      <TextField
        label="Position"
        fullWidth
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
        helperText="Enter position"
      />
      <div className="grid grid-cols-2 gap-4">
        <TextField
          label="Start Month"
          fullWidth
          type="month"
          InputLabelProps={{ shrink: true }}
          value={startMonth}
          onChange={(e) => setStartMonth(e.target.value)}
          required
          helperText="Start date"
        />
        <TextField
          label="End Month"
          fullWidth
          type="month"
          InputLabelProps={{ shrink: true }}
          value={endMonth}
          onChange={(e) => setEndMonth(e.target.value)}
          required
          helperText="End date"
        />
      </div>
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        helperText="Enter description"
      />
      <button
        type="button"
        className="cursor-pointer rounded-full text-white bg-r-primary py-2 px-5"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default ExperienceForm;
