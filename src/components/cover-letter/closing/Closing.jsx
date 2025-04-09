import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const Closing = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [closing] = useState(CoverLetterData.closing || '');

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('closing', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="closing"
        label="Closing"
        value={closing}
        onChange={(e) => handleChange(e)}
        helperText="Conclude your cover letter."
        multiline
        rows={4}
      />
    </div>
  );
};

export default Closing;
