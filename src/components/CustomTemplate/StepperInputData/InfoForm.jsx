
import { TextField } from '@mui/material'
import React from 'react'

export const InfoForm = () => {
  return (
    <div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-4 px-1'>
      
      <label >
      <TextField
       className='w-full'
       required
       name="fullName"
       label="Full Name"
       id="outlined-basic"  variant="outlined"
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
        helperText="Please enter your Job Title" />
      </label>
      <label>
    <TextField
      className='w-full'
      required
      name="phoneNumber"
      label="Phone Number"
      variant="outlined"
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
      helperText="Enter your full address"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      name="nationality"
      label="Nationality"
      variant="outlined"
      helperText="Enter your nationality"
    />
  </label>

  <label>
    <TextField
      className='w-full'
      name="dob"
      label="Date of Birth"
      type="date"
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
      helperText="Write a short bio"
    />
  </label>
      </div>
    </div>
  )
}


