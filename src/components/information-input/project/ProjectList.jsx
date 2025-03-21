import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectCard from "./ProjectCard";
import SectionHead from "../../header/section-head/SectionHead";
import LivePreview from "../live-preview/LivePreview";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addProject = (newProject) => {
    console.log("Added Project:", newProject);
    setProjects([...projects, newProject]);
  };

  return (
    <div className="p-4">
      <SectionHead
        subTitle={"Add your projects"}
        title={"Add Project"}
      />
      <div className="flex justify-center">
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add Project
        </button>
      </div>

      {/* Modal Form */}
      <ProjectForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        addProject={addProject}
      />

      {/* Project Cards */}
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
        <div>
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
