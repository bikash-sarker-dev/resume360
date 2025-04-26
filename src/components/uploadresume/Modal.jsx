import React, { useState, useEffect } from "react";

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

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[600px] max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Edit Resume</h2>

        {/* Summary */}
        <label className="font-medium">Summary</label>
        <textarea
          value={formData.summary || ""}
          onChange={(e) => handleChange(e, "summary")}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Skills */}
        <h3 className="font-semibold">Skills</h3>
        <label>Frontend</label>
        <input
          type="text"
          value={formData.skills?.frontend.join(", ") || ""}
          onChange={(e) => handleChange(e, "skills", "frontend")}
          className="w-full p-2 border rounded mb-2"
        />
        <label>Backend</label>
        <input
          type="text"
          value={formData.skills?.backend.join(", ") || ""}
          onChange={(e) => handleChange(e, "skills", "backend")}
          className="w-full p-2 border rounded mb-2"
        />
        <label>Others</label>
        <input
          type="text"
          value={formData.skills?.others.join(", ") || ""}
          onChange={(e) => handleChange(e, "skills", "others")}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Education */}
        <label className="font-medium">Education</label>
        <textarea
          value={formData.education || ""}
          onChange={(e) => handleChange(e, "education")}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Languages */}
        <label className="font-medium">Languages</label>
        <input
          type="text"
          value={formData.languages || ""}
          onChange={(e) => handleChange(e, "languages")}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
