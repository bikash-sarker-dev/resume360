import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const EmployerInfo = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [employerName] = useState(CoverLetterData.employer.name || '');
  const [company] = useState(CoverLetterData.employer.company || '');
  const [address] = useState(CoverLetterData.employer.address || '');
  const [cityZip] = useState(CoverLetterData.employer.cityZip || '');

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection('employer', { ...CoverLetterData.employer, [name]: value });
  };

  return (
    <div className="grid grid-cols-2 px-4 gap-4 mt-5">
      <TextField
        className="col-span-2"
        required
        name="name"
        label="Hiring Manager's Name"
        value={employerName}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        className="col-span-2"
        required
        name="company"
        label="Company Name"
        value={company}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        className=""
        required
        name="address"
        label="Company Address"
        value={address}
        onChange={(e) => handleChange(e)}
      />
      <TextField
        className=""
        required
        name="cityZip"
        label="City, Zip Code"
        value={cityZip}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default EmployerInfo;
