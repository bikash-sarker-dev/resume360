import React, { useContext, useState } from "react";
import ProjectForm from "./ProjectForm";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const ProjectList = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);
  const [openModal, setOpenModal] = useState(false);

  const addProject = (newProject) => {
    updateSection("projects", [...resumeData.projects, newProject]);
  };

  const deleteProject = (indexToDelete) => {
    const updatedProjects = resumeData.projects.filter((_, index) => index !== indexToDelete);
    updateSection("projects", updatedProjects);
  };

  return (
    <div className="p-4">
      {/* Project Form */}
      <div className="grid grid-cols-1 gap-4">
        <ProjectForm
          open={openModal}
          handleClose={() => setOpenModal(false)}
          addProject={addProject}
        />
      </div>

      {/* List of Projects */}
      {resumeData.projects?.length > 0 && (
        <div className="mt-6">
          {resumeData.projects.map((project, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm relative"
            >
              <button
                onClick={() => deleteProject(index)}
                className="absolute top-2 right-2 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full"
              >
                Delete
              </button>
              <h3 className="text-lg font-semibold">{project.projectName}</h3>
              <p className="mb-2">{project.description}</p>
              {project.live && (
                <p>
                  <span className="font-medium">Live:</span>{" "}
                  <a href={project.live} target="_blank" className="text-blue-600 underline">
                    {project.live}
                  </a>
                </p>
              )}
              {project.client && (
                <p>
                  <span className="font-medium">Client:</span>{" "}
                  <a href={project.client} target="_blank" className="text-blue-600 underline">
                    {project.client}
                  </a>
                </p>
              )}
              {project.server && (
                <p>
                  <span className="font-medium">Server:</span>{" "}
                  <a href={project.server} target="_blank" className="text-blue-600 underline">
                    {project.server}
                  </a>
                </p>
              )}
              {project.features?.length > 0 && (
                <ul className="list-disc pl-5 mt-2">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;
