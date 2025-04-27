import React, { useState } from "react";
import Modal from "./Modal"; // Assuming you have a modal component

const Uploadtemplate = ({ extractedText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [extractedTexts, setExtractedTexts] = useState(extractedText);

  const handleEdit = (section) => {
    setEditingSection(section);
    setIsModalOpen(true);
  };

  const handleSave = (updatedObject) => {
    setExtractedTexts(updatedObject); // set updated data from modal
  };

  return (
    <>
      <div className="container pt-28 mx-auto bg-white shadow-lg p-16 rounded-lg">
        {/* Name and Contact Info */}
        <div className="text-center flex justify-between border-b pb-5">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-black">
              {extractedTexts.name || "Your Name"}
            </h1>
            <h2 className="text-2xl mt-2 text-black">
              {extractedTexts.title || "Your Title"}
            </h2>
          </div>
          <div className="mt-2 text-left flex flex-col text-black">
            <h2 className="mb-3 text-2xl font-bold">Contact Info</h2>
            <a href="">Email: {extractedTexts.email || "example@mail.com"}</a>
            <a href="">
              Portfolio: {extractedTexts.portfolio || "yourportfolio.com"}
            </a>
            <a href={extractedTexts.linkedin}>
              LinkedIn: {extractedTexts.linkedin || "linkedin.com/in/you"}
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black">SUMMARY</h3>
          <p className="text-black mt-2">
            {extractedTexts.summary ||
              extractedTexts.objective ||
              "Write a brief personal summary here..."}
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold text-black mt-4">SKILLS</h3>
          <div>
            <div className="mt-2">
              <p className="text-black ml-4">
                <span className="font-bold text-gray-700">Front-End:</span>{" "}
                {extractedTexts?.skills?.frontend.join(", ") ||
                  "Add front-end skills..."}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-black ml-4">
                <span className="font-bold text-gray-700">Back-End:</span>{" "}
                {extractedTexts?.skills?.backend.join(", ") ||
                  "Add front-end skills..."}
              </p>
            </div>

            {extractedTexts?.skills?.comfortable?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">comfortable:</span>{" "}
                  {extractedTexts.skills.comfortable.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.experience?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">experience:</span>{" "}
                  {extractedTexts.skills.experience.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.familiar?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">familiar:</span>{" "}
                  {extractedTexts.skills.familiar.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.softSkills?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">softSkills:</span>{" "}
                  {extractedTexts.skills.softSkills.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.tools?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">tools:</span>{" "}
                  {extractedTexts.skills.tools.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            {extractedTexts?.skills?.others?.length > 0 && (
              <div className="mt-2">
                <p className="text-black ml-4">
                  <span className="font-bold text-gray-700">others:</span>{" "}
                  {extractedTexts.skills.others.join(", ") ||
                    "Add front-end skills..."}
                </p>
              </div>
            )}
            
            
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xl font-semibold text-black">EDUCATION</h3>
          <p className="text-black mt-2">
            {extractedTexts.education ||
              "Add your education background here..."}
          </p>
        </div>

        {/* Projects Section */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">PROJECTS</h3>
          <div className="text-black">
            {extractedTexts.projects?.map((proj, index) => (
              <div key={index} className="mb-4">
                <div className="flex my-3 space-x-3">
                  <h4 className="text-lg font-bold">{proj.title}</h4>
                  <p>
                    <strong>Type:</strong> {proj.type}
                  </p>
                  <p>
                    <strong>Client Repo:</strong> {proj.clientRepo}
                  </p>
                </div>
                <p>
                  <strong>Features:</strong>
                </p>
                <ul className="list-disc ml-6">
                  {proj.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
                <p>
                  <strong>Overview:</strong> {proj.overview}
                </p>
                <p className="mt-2">
                  <strong>Technologies:</strong> {proj.technologies.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black">Languages</h3>
          <p className="text-black mt-2">
            {extractedTexts.languages ||
              extractedTexts.language ||
              "Language details go here..."}
          </p>
        </div>

        {/* edit Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
          >
            edit
          </button>
        </div>
      </div>

      {/* Modal for editing */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        extractedTexts={extractedTexts}
      />
    </>
  );
};

export default Uploadtemplate;
