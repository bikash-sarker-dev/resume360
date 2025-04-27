import { TextField } from '@mui/material'
import React from 'react'
import { useFormData } from '../FormDataProvider';

export const CustomEducationForm = () => {
    const { formData, updateFormData } = useFormData();
    const handleChange = (e) => {
      const { name, value } = e.target;
      // Update the achievements section
      updateFormData('education', {
        ...formData. education,
        [name]: value,
      });
    };
  return (
    <div>
    <div className='grid grid-cols-2 gap-x-2 gap-y-6 px-1'>
      
      <label>
        <TextField
          className='w-full'
          required
          name="institution"
          label="Institution Name"
          variant="outlined"
          value={formData.education?.institution || ''}
          onChange={handleChange}
          helperText="Enter your institution/university name"
        />
      </label>

      <label>
        <TextField
          className='w-full'
          required
          name="degree"
          label="Degree"
          variant="outlined"
          value={formData.education?.degree || ''}
          onChange={handleChange}
          helperText="Enter your degree (e.g., BSc, MSc)"
        />
      </label>

      <label>
        <TextField
          className='w-full'
          name="fieldOfStudy"
          label="Field of Study"
          variant="outlined"
          value={formData.education?.fieldOfStudy || ''}
          onChange={handleChange}
          helperText="Your major or subject"
        />
      </label>

      <label>
        <TextField
          className='w-full'
          name="graduationYear"
          label="Graduation Year"
          type="number"
          variant="outlined"
          value={formData.education?.graduationYear || ''}
          onChange={handleChange}
          helperText="Enter your graduation year"
        />
      </label>

      <label className='col-span-2'>
        <TextField
          className='w-full'
          name="additionalInfo"
          label="Additional Info"
          variant="outlined"
          multiline
          rows={3}
          value={formData.education?.additionalInfo || ''}
          onChange={handleChange}
          helperText="Any achievements, GPA, or notes"
        />
      </label>

    </div>
  </div>
  )
}
