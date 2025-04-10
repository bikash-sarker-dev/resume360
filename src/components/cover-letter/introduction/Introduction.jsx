import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const Introduction = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);

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
        value={CoverLetterData.introduction || ''}
        onChange={handleChange}
        helperText="Introduce yourself to the employer."
        multiline
        rows={4}
      />
    </div>
  );
};

export default Introduction;
