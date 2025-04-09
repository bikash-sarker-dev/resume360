import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const PersonalInfo = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection('personalInfo', { ...CoverLetterData.personalInfo, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="fullName"
        label="Your Name"
        value={CoverLetterData.personalInfo.fullName || ''}
        onChange={handleChange}
        helperText="Please enter your full name"
      />
      <TextField
        className="w-full"
        required
        name="address"
        label="Address"
        value={CoverLetterData.personalInfo.address || ''}
        onChange={handleChange}
        helperText="Please enter your address"
      />
      <TextField
        className="w-full"
        required
        name="cityZip"
        label="City, Zip Code"
        value={CoverLetterData.personalInfo.cityZip || ''}
        onChange={handleChange}
        helperText="Please enter your city and zip code"
      />
      <TextField
        className="w-full"
        required
        name="email"
        label="Email"
        type="email"
        value={CoverLetterData.personalInfo.email || ''}
        onChange={handleChange}
        helperText="Please enter your email address"
      />
      <TextField
        className="w-full"
        required
        name="phone"
        label="Phone Number"
        value={CoverLetterData.personalInfo.phone || ''}
        onChange={handleChange}
        helperText="Please enter your phone number"
      />
      <TextField
        className="w-full"
        name="linkedIn"
        label="LinkedIn Profile URL"
        value={CoverLetterData.personalInfo.linkedIn || ''}
        onChange={handleChange}
        helperText="Please enter your LinkedIn profile URL"
      />
      <TextField
        className="w-full"
        name="portfolio"
        label="Portfolio URL"
        value={CoverLetterData.personalInfo.portfolio || ''}
        onChange={handleChange}
        helperText="Please enter your portfolio URL"
      />
      <TextField
        className="w-full"
        required
        name="date"
        label="Date"
        type="date"
        value={CoverLetterData.personalInfo.date || ''}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        helperText="Please select the date"
      />
    </div>
  );
};

export default PersonalInfo;
