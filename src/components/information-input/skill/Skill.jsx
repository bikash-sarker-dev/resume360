import { useContext, useState } from "react";
import SectionHead from "../../header/section-head/SectionHead";
import LivePreview from "../live-preview/LivePreview";
import { ResumeContext } from "../../../contextApi/resume-context/ResumeContext";

const Skill = () => {
  const { resumeData, updateSection } = useContext(ResumeContext);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!resumeData.skills.includes(input.trim())) {
        updateSection("skills", [...resumeData.skills, input.trim()]);
      }
      setInput("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    updateSection("skills", updatedSkills);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4">
        {/* Skills input & list */}
        <div className="border rounded p-4 bg-gray-100">
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-300 rounded px-3 py-1 text-sm"
              >
                {skill}
                <button
                  onClick={() => removeSkill(index)}
                  className="ml-2 text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
              </div>
            ))}
            <input
              type="text"
              className="bg-transparent focus:outline-none"
              placeholder="Type and press Enter"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
