import { TextField } from '@mui/material';
import React from 'react';
import { useFormData } from '../FormDataProvider';

export const CustomAchievementForm = () => {
  const { formData, updateFormData } = useFormData();
 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the achievements section
    updateFormData('achievements', {
      ...formData.achievements,
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
            name="achievementTitle"
            label="Achievement Title"
            variant="outlined"
            value={formData.achievements?.achievementTitle || ''}
            onChange={handleChange}
            helperText="Enter the title of your achievement"
          />
        </label>

        <label>
          <TextField
            className='w-full'
            required
            name="date"
            label="Date"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={formData.achievements?.date || ''}
            onChange={handleChange}
            helperText="When did you achieve this?"
          />
        </label>
          <label >
          <TextField
                  fullWidth
                  required
                  name="startdate"
                  label="Start Date"
                  type="month"
                  value={formData.achievements?.startdate || ''}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  helperText="Please select start month and year"
                /></label>
                
                <label >
                <TextField
                  fullWidth
                  name="enddate"
                  label="End Date"
                  type="month"
                  value={formData.achievements?.enddate || ''}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  helperText="Please select end month and year"
                />
                </label>

        <label>
          <TextField
            className='w-full'
            name="organization"
            label="Organization"
            variant="outlined"
            value={formData.achievements?.organization || ''}
            onChange={handleChange}
            helperText="Which organization or body awarded this?"
          />
        </label>

        <label>
          <TextField
            className='w-full'
            name="description"
            label="Description"
            variant="outlined"
            multiline
            rows={3}
            value={formData.achievements?.description || ''}
            onChange={handleChange}
            helperText="Provide a brief description of the achievement"
          />
        </label>

      </div>
    </div>
  );
};
