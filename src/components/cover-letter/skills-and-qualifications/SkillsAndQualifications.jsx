import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const SkillsAndQualifications = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('skillsAndQualifications', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="skillsAndQualifications"
        label="Skills and Qualifications"
        value={CoverLetterData.skillsAndQualifications || ''}
        onChange={handleChange}
        helperText="List your key skills and qualifications."
        multiline
        rows={4}
      />
    </div>
  );
};

export default SkillsAndQualifications;
