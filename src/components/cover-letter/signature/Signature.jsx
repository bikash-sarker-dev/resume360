import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const Signature = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection('ending', { 
      ...CoverLetterData.ending, 
      [name]: value 
    });
  };

  return (
    <div className="grid grid-cols-1 px-4 gap-4 mt-5">
      <TextField
        className="w-full"
        required
        name="formalClosing"
        label="Formal Closing"
        value={CoverLetterData.ending.formalClosing || ''}
        onChange={handleChange}
        helperText="Add a formal closing like 'Sincerely' or 'Best regards'."
      />
      <TextField
        className="w-full"
        required
        name="signature"
        label="Signature"
        value={CoverLetterData.ending.signature || ''}
        onChange={handleChange}
        helperText="Type your full name or digital signature."
      />
    </div>
  );
};

export default Signature;
