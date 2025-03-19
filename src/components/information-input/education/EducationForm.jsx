import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const EducationForm = ({ open, handleClose, addEducation }) => {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    field: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
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
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      grade: "",
      description: "",
    });
    handleClose(); // Close modal after submission
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle className="text-r-primary">Add Education</DialogTitle>
      <DialogContent dividers>
        <form className="grid grid-cols-2 gap-3">
          <TextField className="col-span-2" label="School, College and University" name="school" value={education.school} onChange={handleChange} required helperText="Please enter your school, college and university full name" />
          <TextField className="md:col-span-1 col-span-2" label="Degree" name="degree" value={education.degree} onChange={handleChange} required helperText="Please enter your degree" />
          <TextField className="md:col-span-1 col-span-2" label="Field of Study" name="field" value={education.field} onChange={handleChange} required helperText="Please enter your field of study"/>
          <TextField label="Start Month" name="startMonth" value={education.startMonth} onChange={handleChange} required helperText="Please enter start month"/>
          <TextField label="Start Year" name="startYear" value={education.startYear} onChange={handleChange} required helperText="Please enter end month"/>
          <TextField label="End Month" name="endMonth" value={education.endMonth} onChange={handleChange} helperText="Please enter end month"/>
          <TextField label="End Year" name="endYear" value={education.endYear} onChange={handleChange} helperText="Please enter end year"/>
          <TextField className="col-span-2" label="Grade" name="grade" value={education.grade} onChange={handleChange} helperText="Please enter your grade"/>
          <TextField className="col-span-2" label="Description" name="description" value={education.description} onChange={handleChange} multiline rows={3} helperText="Please enter description"/>
        </form>
      </DialogContent>
      <DialogActions>
        <button className='cursor-pointer rounded-full text-white bg-r-secondary py-2 px-5' onClick={handleClose} color="secondary">Cancel</button>
        <button className='cursor-pointer rounded-full text-white bg-r-primary py-2 px-5' onClick={handleSubmit} variant="contained" color="primary">Add</button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationForm;
