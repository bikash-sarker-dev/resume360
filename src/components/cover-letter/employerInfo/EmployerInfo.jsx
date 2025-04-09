import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const EmployerInfo = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [employerName] = useState(CoverLetterData.employer.name || '');
  const [company] = useState(CoverLetterData.employer.company || '');
  const [address] = useState(CoverLetterData.employer.address || '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection('employer', { ...CoverLetterData.employer, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="name"
        label="Employer Name"
        value={employerName}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        className="w-full"
        required
        name="company"
        label="Company"
        value={company}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        className="w-full"
        required
        name="address"
        label="Company Address"
        value={address}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default EmployerInfo;
