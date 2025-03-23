import React, { useContext, useState } from "react";
import ProjectForm from "./ProjectForm";
import ProjectCard from "./ProjectCard";
import SectionHead from "../../header/section-head/SectionHead";
import LivePreview from "../live-preview/LivePreview";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const ProjectList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);
  const [openModal, setOpenModal] = useState(false);

  const addProject = (newProject) => {
    updateSection("projects", [...resumeData.projects, newProject]);
  };

  return (
    <div className="p-4">
      <SectionHead subTitle={"Add your projects"} title={"Add Project"} />

      {/* Add Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setOpenModal(true)}
          className="rounded-full text-white bg-r-primary py-2 px-5"
        >
          Add Project
        </button>
      </div>

      {/* Project Form Modal */}
      <ProjectForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        addProject={addProject}
      />

      {/* Project Cards & Preview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-4">
          {resumeData.projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
          {resumeData.projects.length === 0 && (
            <p className="text-center col-span-2">No Projects Added</p>
          )}
        </div>

        {/* Live Preview */}
        <div>
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
