import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const proficiencyLevels = ["Beginner", "Intermediate", "Fluent", "Native"];

const Language = ({ onAddLanguage }) => {
  const [language, setLanguage] = useState("");
  const [proficiency, setProficiency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (language && proficiency) {
      onAddLanguage({ language, proficiency });
      setLanguage("");
      setProficiency("");
    }
  };

  return (
    <div className="p-6 bg-white space-y-4">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <TextField
            required
            fullWidth
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder="e.g., English"
          />
        </div>

        <div>
          <TextField
            select
            required
            fullWidth
            label="Proficiency"
            value={proficiency}
            onChange={(e) => setProficiency(e.target.value)}
          >
            {proficiencyLevels.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <button
          type="submit"
          className="self-start rounded-full bg-r-primary text-white py-2 px-6 transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Language;
