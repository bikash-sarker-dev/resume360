import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const ExperienceForm = ({ open, handleClose, addExperience }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (company && position && duration) {
      addExperience({ company, position, duration, description });
      handleClose();
      setCompany("");
      setPosition("");
      setDuration("");
      setDescription("");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="bg-white p-6 rounded-lg w-[500px] mx-auto mt-40 shadow-lg space-y-4">
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
          <Button onClick={handleClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Add
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ExperienceForm;
