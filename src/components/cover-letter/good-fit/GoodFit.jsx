import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const GoodFit = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [fit] = useState(CoverLetterData.goodFit || '');

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('goodFit', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="goodFit"
        label="Why You're a Good Fit"
        value={fit}
        onChange={(e) => handleChange(e)}
        helperText="Explain why you are a good fit for this job."
        multiline
        rows={4}
      />
    </div>
  );
};

export default GoodFit;
