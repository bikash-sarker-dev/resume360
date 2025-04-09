import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const Introduction = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [introduction] = useState(CoverLetterData.introduction || '');

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('introduction', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="introduction"
        label="Introduction"
        value={introduction}
        onChange={(e) => handleChange(e)}
        helperText="Introduce yourself to the employer."
        multiline
        rows={4}
      />
    </div>
  );
};

export default Introduction;
