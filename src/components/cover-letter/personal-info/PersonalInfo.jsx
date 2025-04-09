import * as React from 'react';
import { TextField, Button } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const PersonalInfo = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  
  const [fullName] = useState(CoverLetterData.personalInfo.fullName || '');
  const [address] = useState(CoverLetterData.personalInfo.address || '');
  const [cityZip] = useState(CoverLetterData.personalInfo.cityZip || '');
  const [email] = useState(CoverLetterData.personalInfo.email || '');
  const [phone] = useState(CoverLetterData.personalInfo.phone || '');
  const [linkedIn] = useState(CoverLetterData.personalInfo.linkedIn || '');
  const [portfolio] = useState(CoverLetterData.personalInfo.portfolio || '');
  const [date] = useState(CoverLetterData.personalInfo.date || '');

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
        value={fullName}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your full name"
      />
      <TextField
        className="w-full"
        required
        name="address"
        label="Address"
        value={address}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your address"
      />
      <TextField
        className="w-full"
        required
        name="cityZip"
        label="City, Zip Code"
        value={cityZip}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your city and zip code"
      />
      <TextField
        className="w-full"
        required
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your email address"
      />
      <TextField
        className="w-full"
        required
        name="phone"
        label="Phone Number"
        value={phone}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your phone number"
      />
      <TextField
        className="w-full"
        name="linkedIn"
        label="LinkedIn Profile URL"
        value={linkedIn}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your LinkedIn profile URL"
      />
      <TextField
        className="w-full"
        name="portfolio"
        label="Portfolio URL"
        value={portfolio}
        onChange={(e) => handleChange(e)}
        helperText="Please enter your portfolio URL"
      />
      <TextField
        className="w-full"
        required
        name="date"
        label="Date"
        type="date"
        value={date}
        onChange={(e) => handleChange(e)}
        InputLabelProps={{ shrink: true }}
        helperText="Please select the date"
      />
    </div>
  );
};

export default PersonalInfo;
