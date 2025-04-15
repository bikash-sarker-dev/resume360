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
    <div className="w-full px-4 py-6">
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          required
          name="school"
          label="School, College and University"
          value={education.school}
          onChange={handleChange}
          helperText="Please enter your school, college and university full name"
        />
        <TextField
          fullWidth
          required
          name="degree"
          label="Degree"
          value={education.degree}
          onChange={handleChange}
          helperText="Please enter your degree"
        />
        <TextField
          fullWidth
          required
          name="field"
          label="Field of Study"
          value={education.field}
          onChange={handleChange}
          helperText="Please enter your field of study"
        />
        <TextField
          fullWidth
          required
          name="startDate"
          label="Start Date"
          type="month"
          value={education.startDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          helperText="Please select start month and year"
        />
        <TextField
          fullWidth
          name="endDate"
          label="End Date"
          type="month"
          value={education.endDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          helperText="Please select end month and year"
        />
        <TextField
          fullWidth
          name="grade"
          label="Grade"
          value={education.grade}
          onChange={handleChange}
          helperText="Please enter your grade"
        />
        <TextField
          fullWidth
          name="description"
          label="Description"
          value={education.description}
          onChange={handleChange}
          multiline
          rows={3}
          helperText="Please enter description"
        />
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="mt-2 cursor-pointer rounded-full text-white bg-r-primary hover:bg-r-primary/90 transition duration-300 py-2 px-6"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
