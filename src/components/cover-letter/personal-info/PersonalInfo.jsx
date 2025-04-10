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
    <div className="grid grid-cols-2 px-4 gap-4 mt-5">
      <TextField
        className="col-span-2"
        required
        name="fullName"
        label="Your Name"
        value={CoverLetterData.personalInfo.fullName || ''}
        onChange={handleChange}
        helperText="Please enter your full name"
      />
      <TextField
        className=""
        required
        name="address"
        label="Address"
        value={CoverLetterData.personalInfo.address || ''}
        onChange={handleChange}
        helperText="Please enter your address"
      />
      <TextField
        className=""
        required
        name="cityZip"
        label="City, Zip Code"
        value={CoverLetterData.personalInfo.cityZip || ''}
        onChange={handleChange}
        helperText="Please enter your city and zip code"
      />
      <TextField
        className=""
        required
        name="email"
        label="Email"
        type="email"
        value={CoverLetterData.personalInfo.email || ''}
        onChange={handleChange}
        helperText="Please enter your email address"
      />
      <TextField
        className=""
        required
        name="phone"
        label="Phone Number"
        value={CoverLetterData.personalInfo.phone || ''}
        onChange={handleChange}
        helperText="Please enter your phone number"
      />
      <TextField
        className=""
        name="linkedIn"
        label="LinkedIn Profile URL"
        value={CoverLetterData.personalInfo.linkedIn || ''}
        onChange={handleChange}
        helperText="Please enter your LinkedIn profile URL"
      />
      <TextField
        className=""
        name="portfolio"
        label="Portfolio URL"
        value={CoverLetterData.personalInfo.portfolio || ''}
        onChange={handleChange}
        helperText="Please enter your portfolio URL"
      />
      <TextField
        className="col-span-2"
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
