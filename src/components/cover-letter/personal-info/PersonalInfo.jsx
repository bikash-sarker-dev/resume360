import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext, useEffect } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';
import { AuthContext } from '../../../contextApi/AuthenticationContext';


const PersonalInfo = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const { user } = useContext(AuthContext); // Get user from AuthProvider

  // Set email from auth user on first render
  useEffect(() => {
    if (user?.email) {
      updateSection('personalInfo', { 
        ...CoverLetterData.personalInfo,
        email: user.email
      });
    }
  }, [user?.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateSection('personalInfo', { ...CoverLetterData.personalInfo, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4 mt-5">
      <TextField
        className="md:col-span-2"
        required
        name="fullName"
        label="Your Name"
        value={CoverLetterData.personalInfo.fullName || ''}
        onChange={handleChange}
        helperText="Please enter your full name"
      />
      <TextField
        required
        name="address"
        label="Address"
        value={CoverLetterData.personalInfo.address || ''}
        onChange={handleChange}
        helperText="Please enter your address"
      />
      <TextField
        required
        name="cityZip"
        label="City, Zip Code"
        value={CoverLetterData.personalInfo.cityZip || ''}
        onChange={handleChange}
        helperText="Please enter your city and zip code"
      />
      <TextField
        required
        name="email"
        label="Email"
        type="email"
        value={CoverLetterData.personalInfo.email || ''}
        onChange={handleChange}
        helperText="Email is fetched from your account"
        disabled // Disable input field
      />
      <TextField
        required
        name="phone"
        label="Phone Number"
        value={CoverLetterData.personalInfo.phone || ''}
        onChange={handleChange}
        helperText="Please enter your phone number"
      />
      <TextField
        name="linkedIn"
        label="LinkedIn Profile URL"
        value={CoverLetterData.personalInfo.linkedIn || ''}
        onChange={handleChange}
        helperText="Please enter your LinkedIn profile URL"
      />
      <TextField
        name="portfolio"
        label="Portfolio URL"
        value={CoverLetterData.personalInfo.portfolio || ''}
        onChange={handleChange}
        helperText="Please enter your portfolio URL"
      />
      <TextField
        className="md:col-span-2"
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
