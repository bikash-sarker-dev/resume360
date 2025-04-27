import { TextField } from '@mui/material';
import React from 'react';

export const CustomExperienceForm = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      experience: {
        ...prevData.experience,
        [name]: value,
      },
    }));
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-2 gap-y-6 px-1'>

        <label>
          <TextField
            className='w-full'
            required
            name="companyName"
            label="Company Name"
            variant="outlined"
            value={formData.experience?.companyName || ''}
            onChange={handleChange}
            helperText="Enter your company name"
          />
        </label>

        <label>
          <TextField
            className='w-full'
            required
            name="position"
            label="Job Position"
            variant="outlined"
            value={formData.experience?.position || ''}
            onChange={handleChange}
            helperText="Enter your job title or position"
          />
        </label>

        <label>
          <TextField
            className='w-full'
            name="duration"
            label="Duration"
            variant="outlined"
            value={formData.experience?.duration || ''}
            onChange={handleChange}
            helperText="Example: Jan 2022 - Present"
          />
        </label>

        <label>
          <TextField
            className='w-full'
            name="location"
            label="Location"
            variant="outlined"
            value={formData.experience?.location || ''}
            onChange={handleChange}
            helperText="City, Country"
          />
        </label>

        <label className='col-span-2'>
          <TextField
            className='w-full'
            name="description"
            label="Description"
            multiline
            rows={3}
            variant="outlined"
            value={formData.experience?.description || ''}
            onChange={handleChange}
            helperText="Describe your responsibilities or achievements"
          />
        </label>

      </div>
    </div>
  );
};
