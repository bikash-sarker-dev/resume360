import React, { useContext, useState } from "react";
import ProjectForm from "./ProjectForm";
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

      {/* Project Cards & Preview */}
      <div className="grid grid-cols-2 gap-4">
        {/* Project Form Modal */}
        <ProjectForm
          open={openModal}
          handleClose={() => setOpenModal(false)}
          addProject={addProject}
        />
        {/* Live Preview */}
        <div>
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
