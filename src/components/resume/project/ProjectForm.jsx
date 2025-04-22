import React, { useState } from "react";
import { TextField } from "@mui/material";

const ProjectForm = ({ addProject }) => {
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    live: "",
    client: "",
    server: "",
    features: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const featureList = project.features
      .split("\n")
      .map((f) => f.trim())
      .filter((f) => f);
    addProject({ ...project, features: featureList });
    setProject({
      projectName: "",
      description: "",
      live: "",
      client: "",
      server: "",
      features: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-6"
    >
      <TextField
        label="Project Name"
        name="projectName"
        value={project.projectName}
        onChange={handleChange}
        required
        fullWidth
        className="md:col-span-2"
        helperText="Enter your project name"
      />
      <TextField
        label="Description"
        name="description"
        value={project.description}
        onChange={handleChange}
        required
        multiline
        rows={3}
        fullWidth
        className="md:col-span-2"
        helperText="Brief description of the project"
      />
      <TextField
        label="Live Link"
        name="live"
        value={project.live}
        onChange={handleChange}
        fullWidth
        helperText="Link to live project"
      />
      <TextField
        label="Client Repo"
        name="client"
        value={project.client}
        onChange={handleChange}
        fullWidth
        helperText="Link to frontend repo"
      />
      <TextField
        label="Server Repo"
        name="server"
        value={project.server}
        onChange={handleChange}
        fullWidth
        helperText="Link to backend repo (if any)"
      />
      <TextField
        label="Features (One per line)"
        name="features"
        value={project.features}
        onChange={handleChange}
        multiline
        rows={4}
        fullWidth
        className="md:col-span-2"
        helperText="List key features, each on a new line"
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

export default ProjectForm;
