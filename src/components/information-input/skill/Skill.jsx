import { useState } from "react";

const Skill = () => {
  const [skills, setSkills] = useState(["html", "css", "js"]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault();
      if (!skills.includes(input.trim())) {
        setSkills([...skills, input.trim()]);
      }
      setInput("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Skill</h2>
      <div className="border rounded p-4 bg-gray-100">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
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

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500">
          Previous
        </button>
        <button className="px-6 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default Skill;
