
import { TextField } from '@mui/material'
import React from 'react'
import { useFormData } from '../FormDataProvider';

export const InfoForm = () => {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData('personalInfo', {
      ...formData.personalInfo,
      [name]: value,
    });
  };
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-6 px-1'>
      
      <label >
      <TextField
       className='w-full'
       required
       name="fullName"
       label="Full Name"
       id="outlined-basic"  variant="outlined"
       value={formData.fullName}
        onChange={handleChange}
       helperText="Please enter your full name" />
      </label>
      <label >
      <TextField
       className='w-full'
       required
       name="jobTitle"
       label="Job Title"
        id="outlined-basic" 
        variant="outlined"
        value={formData.jobTitle}
        onChange={handleChange}
        helperText="Please enter your Job Title" />
      </label>
      <label>
    <TextField
      className='w-full'
      required
      name="phoneNumber"
      label="Phone Number"
      variant="outlined"
      value={formData.phoneNumber}
      onChange={handleChange}
      helperText="Enter a valid phone number"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      required
      name="email"
      type="email"
      label="Email"
      variant="outlined"
      value={formData.email}
      onChange={handleChange}
      helperText="Enter a valid email address"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      required
      name="address"
      label="Address"
      variant="outlined"
      value={formData.address}
      onChange={handleChange}
      helperText="Enter your full address"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      name="nationality"
      label="Nationality"
      variant="outlined"
      value={formData.nationality}
      onChange={handleChange}
      helperText="Enter your nationality"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      name="dob"
      label="Date of Birth"
      type="date"
      value={formData.dob}
      onChange={handleChange}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      helperText="Enter your birth date"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      name="gender"
      label="Gender"
      variant="outlined"
      value={formData.gender}
      onChange={handleChange}
      helperText="Specify your gender"
    />
  </label>

  <label className='col-span-2'>
    <TextField
      className='w-full' 
      name="aboutMe"
      label="About Me"
      multiline
      rows={4}
      variant="outlined"
      value={formData.aboutMe}
      onChange={handleChange}
      helperText="Write a short bio"
    />
  </label>
      </div>
    </div>
  )
}


