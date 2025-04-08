import React, { useContext, useState } from "react";
import ProjectForm from "./ProjectForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const ProjectList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);
  const [openModal, setOpenModal] = useState(false);

  const addProject = (newProject) => {
    updateSection("projects", [...resumeData.projects, newProject]);
  };

  return (
    <div className="p-4">
      {/* Project Cards & Preview */}
      <div className="grid grid-cols-1 gap-4">
        {/* Project Form Modal */}
        <ProjectForm
          open={openModal}
          handleClose={() => setOpenModal(false)}
          addProject={addProject}
        />
      </div>
    </div>
  );
};

export default ProjectList;
