import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const ProfessionalExperience = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [experience] = useState(CoverLetterData.professionalExperience || '');

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('professionalExperience', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="professionalExperience"
        label="Professional Experience"
        value={experience}
        onChange={(e) => handleChange(e)}
        helperText="Describe your professional experience."
        multiline
        rows={4}
      />
    </div>
  );
};

export default ProfessionalExperience;
