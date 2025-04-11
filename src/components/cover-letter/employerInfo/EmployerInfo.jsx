import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const EmployerInfo = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection('hiringManager', {
      ...CoverLetterData.hiringManager,
      [name]: value,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 mt-5">
      <TextField
        className="md:col-span-2"
        required
        name="name"
        label="Hiring Manager's Name"
        value={CoverLetterData.hiringManager?.name || ''}
        onChange={handleChange}
        helperText="Enter the full name of the person you’re addressing."
      />
      <TextField
        className="md:col-span-2"
        required
        name="company"
        label="Company Name"
        value={CoverLetterData.hiringManager?.company || ''}
        onChange={handleChange}
        helperText="Enter the official name of the organization."
      />
      <TextField
        required
        name="address"
        label="Company Address"
        value={CoverLetterData.hiringManager?.address || ''}
        onChange={handleChange}
        helperText="Enter the street address or office location."
      />
      <TextField
        required
        name="cityZip"
        label="City, Zip Code"
        value={CoverLetterData.hiringManager?.cityZip || ''}
        onChange={handleChange}
        helperText="Enter the city and postal code (e.g., New York, NY 10001)."
      />
    </div>
  );
};

export default EmployerInfo;
