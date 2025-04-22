import React, { useState } from "react";
import { TextField } from "@mui/material";

const ExperienceForm = ({ addExperience }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6">
      <TextField
        fullWidth
        label="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
        helperText="Enter company name"
        className="col-span-1 md:col-span-2"
      />
      <TextField
        fullWidth
        label="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
        helperText="Enter position"
        className="col-span-1 md:col-span-2"
      />
      <TextField
        fullWidth
        label="Start Month"
        type="month"
        InputLabelProps={{ shrink: true }}
        value={startMonth}
        onChange={(e) => setStartMonth(e.target.value)}
        required
        helperText="Start date"
      />
      <TextField
        fullWidth
        label="End Month"
        type="month"
        InputLabelProps={{ shrink: true }}
        value={endMonth}
        onChange={(e) => setEndMonth(e.target.value)}
        required
        helperText="End date"
      />
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        helperText="Enter job description"
        className="md:col-span-2"
      />
      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="rounded-full text-white bg-r-primary hover:bg-r-primary/90 transition duration-300 py-2 px-6"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ExperienceForm;
