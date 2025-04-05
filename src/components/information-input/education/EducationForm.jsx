import React, { useState } from "react";
import { TextField } from "@mui/material";

const EducationForm = ({ addEducation }) => {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
  });

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(education);
    setEducation({
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      grade: "",
      description: "",
    });
  };

  return (
    <div>
      <form className="grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
        <TextField
          className="col-span-2"
          label="School, College and University"
          name="school"
          value={education.school}
          onChange={handleChange}
          required
          helperText="Please enter your school, college and university full name"
        />
        <TextField
          className="md:col-span-1 col-span-2"
          label="Degree"
          name="degree"
          value={education.degree}
          onChange={handleChange}
          required
          helperText="Please enter your degree"
        />
        <TextField
          className="md:col-span-1 col-span-2"
          label="Field of Study"
          name="field"
          value={education.field}
          onChange={handleChange}
          required
          helperText="Please enter your field of study"
        />
        <TextField
          label="Start Date"
          name="startDate"
          type="month"
          value={education.startDate}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
          helperText="Please select start month and year"
        />
        <TextField
          label="End Date"
          name="endDate"
          type="month"
          value={education.endDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          helperText="Please select end month and year"
        />
        <TextField
          className="col-span-2"
          label="Grade"
          name="grade"
          value={education.grade}
          onChange={handleChange}
          helperText="Please enter your grade"
        />
        <TextField
          className="col-span-2"
          label="Description"
          name="description"
          value={education.description}
          onChange={handleChange}
          multiline
          rows={3}
          helperText="Please enter description"
        />
        <button
          type="submit"
          className="col-span-2 cursor-pointer rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default EducationForm;
