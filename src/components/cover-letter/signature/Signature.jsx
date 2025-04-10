import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const Signature = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [signature] = useState(CoverLetterData.signature || '');

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('signature', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="signature"
        label="Signature"
        value={signature}
        onChange={(e) => handleChange(e)}
        helperText="Add your signature."
        rows={4}
      />
    </div>
  );
};

export default Signature;
