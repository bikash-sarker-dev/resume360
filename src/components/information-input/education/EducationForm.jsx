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
      <DialogTitle>Add Education</DialogTitle>
      <DialogContent dividers>
        <form className="grid grid-cols-2 gap-3">
          <TextField className="col-span-2" label="School" name="school" value={education.school} onChange={handleChange} required />
          <TextField label="Degree" name="degree" value={education.degree} onChange={handleChange} required />
          <TextField label="Field of Study" name="field" value={education.field} onChange={handleChange} required />
          <TextField label="Start Month" name="startMonth" value={education.startMonth} onChange={handleChange} required />
          <TextField label="Start Year" name="startYear" value={education.startYear} onChange={handleChange} required />
          <TextField label="End Month" name="endMonth" value={education.endMonth} onChange={handleChange} />
          <TextField label="End Year" name="endYear" value={education.endYear} onChange={handleChange} />
          <TextField className="col-span-2" label="Grade" name="grade" value={education.grade} onChange={handleChange} />
          <TextField className="col-span-2" label="Description" name="description" value={education.description} onChange={handleChange} multiline rows={3} />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EducationForm;
