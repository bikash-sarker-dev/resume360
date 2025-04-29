import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

const Modal = ({ isOpen, onClose, onSave, extractedTexts }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (isOpen && extractedTexts) {
      setFormData(extractedTexts);
    }
  }, [isOpen, extractedTexts]);

  const handleChange = (e, field, subfield) => {
    if (subfield) {
      setFormData((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subfield]: e.target.value.split(",").map((s) => s.trim()),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.put(
        `https://resume360-server.vercel.app/resumeIn/${formData._id}`,
        formData
      );
      Swal.fire("Success!", "Resume updated successfully.", "success");
      onSave(formData);
      onClose();
    } catch (error) {
      Swal.fire("Error", "Failed to update resume.", "error");
      console.error("PUT Error:", error);
    }
  };
  
  
  

  const handleProjectChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedProjects = [...prev.projects];
      updatedProjects[index][field] = value;
      return { ...prev, projects: updatedProjects };
    });
  };

  const handleAddProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...(prev.projects || []),
        {
          title: "",
          type: "",
          overview: "",
          features: [],
          technologies: [],
          clientRepo: "",
          serverRepo: "",
          liveLink: "",
        },
      ],
    }));
  };

  const handleDeleteProject = (index) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#588568',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData((prev) => {
          const updatedProjects = [...(prev.projects || [])];
          updatedProjects.splice(index, 1); // Remove the project at index
          return {
            ...prev,
            projects: updatedProjects,
          };
        });
  
        Swal.fire(
          'Deleted!',
          'Your project has been deleted.',
          'success'
        );
      }
    });
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-r-accent bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-r-background p-6 rounded-lg w-[600px] max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Edit Resume</h2>

        <label>name</label>
        <input
          type="text"
          value={formData.name || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />

        <label>title</label>
        <input
          type="text"
          value={formData.title || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />

        <label>email</label>
        <input
          type="text"
          value={formData.email || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />

        <label>linkedin link</label>
        <input
          type="text"
          value={formData.linkedin || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />

        <label>portfolio</label>
        <input
          type="text"
          value={formData.portfolio || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />

        <label className="font-medium">Summary</label>
        <textarea
          value={formData.summary || ""}
          onChange={(e) => handleChange(e, "summary")}
          className="w-full p-2 border border-[#588568] rounded mb-4"
        />

        <h3 className="font-semibold">Skills</h3>
        <label>Frontend</label>
        <input
          type="text"
          value={formData.skills?.frontend.join(", ") || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />
        <label>Backend</label>
        <input
          type="text"
          value={formData.skills?.backend.join(", ") || ""}
          onChange={(e) => handleChange(e, "skills", "backend")}
          className="w-full p-2 border border-[#588568] rounded mb-2"
        />
        <label>Others</label>
        <input
          type="text"
          value={formData.skills?.others.join(", ") || ""}
          onChange={(e) => handleChange(e, "skills", "others")}
          className="w-full p-2 border border-[#588568] rounded mb-4"
        />

        {formData.projects && (
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-4">Projects</h2>

            {formData.projects.map((project, index) => (
              <div
                key={index}
                className=" p-4 my-4 rounded-md shadow-lg bg-gray-100"
              >
                <button
                  onClick={() => handleDeleteProject(index)}
                  className="flex mb-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  <FaTrash></FaTrash>
                </button>

                <label className="font-medium">Title</label>
                <input
                  type="text"
                  required
                  value={project.title || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "title", e.target.value)
                  }
                  className="w-full p-2 border  border-[#588568] rounded mb-4"
                  placeholder="Project Title"
                  
                />

                <label className="font-medium">Type</label>
                <input
                  type="text"
                  value={project.type || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "type", e.target.value)
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  placeholder="Project Type"
                />

                <label className="font-medium">Overview</label>
                <textarea
                  value={project.overview || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "overview", e.target.value)
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  rows="3"
                  placeholder="Project Overview"
                />

                <label className="font-medium">
                  Features (comma separated)
                </label>
                <textarea
                  value={project.features?.join(", ") || ""}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "features",
                      e.target.value.split(",").map((f) => f.trim())
                    )
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  rows="3"
                  placeholder="Project Features"
                />

                <label className="font-medium">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={project.technologies?.join(", ") || ""}
                  onChange={(e) =>
                    handleProjectChange(
                      index,
                      "technologies",
                      e.target.value.split(",").map((t) => t.trim())
                    )
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  placeholder="Technologies Used"
                />

                <label className="font-medium">Client Repo</label>
                <input
                  type="text"
                  value={project.clientRepo || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "clientRepo", e.target.value)
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  placeholder="Client Repo Link"
                />

                <label className="font-medium">Server Repo</label>
                <input
                  type="text"
                  value={project.serverRepo || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "serverRepo", e.target.value)
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  placeholder="Server Repo Link"
                />

                <label className="font-medium">Live Link</label>
                <input
                  type="text"
                  value={project.liveLink || ""}
                  onChange={(e) =>
                    handleProjectChange(index, "liveLink", e.target.value)
                  }
                  className="w-full p-2 border border-[#588568] rounded mb-4"
                  placeholder="Live Link"
                />
              </div>
            ))}

            {/* Add New Project Button */}
            <div className="text-center">
              <button
                onClick={handleAddProject}
                className="bg-r-primary text-white py-2 px-4 rounded hover:bg-green-700 mt-4"
              >
                + Add New Project
              </button>
            </div>
          </div>
        )}

        <label className="font-medium">Education</label>
        <textarea
          value={formData.education || ""}
          onChange={(e) => handleChange(e, "education")}
          className="w-full p-2 border border-[#588568] rounded mb-4"
        />

        <label className="font-medium">Languages</label>
        <input
          type="text"
          value={formData.languages || ""}
          onChange={(e) => handleChange(e, "languages")}
          className="w-full p-2 border border-[#588568] rounded mb-4"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-r-background hover:bg-r-card border-[#588568] border rounded-full text-r-info px-4 py-2 "
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-r-info text-white py-2 px-6 rounded-full hover:text-r-text hover:bg-r-accent transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
