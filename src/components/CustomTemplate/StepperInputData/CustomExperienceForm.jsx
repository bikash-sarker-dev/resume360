import {  Accordion, AccordionDetails, AccordionSummary, TextField } from '@mui/material';
import React from 'react';
import { useFormData } from '../FormDataProvider';
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export const CustomExperienceForm = () => {
 const { formData, updateFormData } = useFormData();

  
 const handleChange = (e) => {
  const { name, value } = e.target;
  // Update the achievements section
  updateFormData('experience', {
    ...formData.experience,
    [name]: value,
  });
};
 const handleChangeAdd = (e) => {
  const { name, value } = e.target;
  // Update the achievements section
  updateFormData('experience2', {
    ...formData.experience2,
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
     <div className='mt-5'>
   

    {/* Add More Section */}
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Add More</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className='grid grid-cols-2 gap-x-2 gap-y-6 px-1'>

<label>
  <TextField
    className='w-full'
    required
    name="companyName2"
    label="Company Name"
    variant="outlined"
    value={formData.experience2?.companyName2 || ''}
    onChange={handleChangeAdd}
    helperText="Enter your company name"
  />
</label>

<label>
  <TextField
    className='w-full'
    required
    name="position2"
    label="Job Position"
    variant="outlined"
    value={formData.experience2?.position2 || ''}
    onChange={handleChangeAdd}
    helperText="Enter your job title or position"
  />
</label>

<label>
  <TextField
    className='w-full'
    name="duration2"
    label="Duration"
    variant="outlined"
    value={formData.experience2?.duration2 || ''}
    onChange={handleChangeAdd}
    helperText="Example: Jan 2022 - Present"
  />
</label>

<label>
  <TextField
    className='w-full'
    name="location2"
    label="Location"
    variant="outlined"
    value={formData.experience2?.location2 || ''}
    onChange={handleChangeAdd}
    helperText="City, Country"
  />
</label>

<label className='col-span-2'>
  <TextField
    className='w-full'
    name="description2"
    label="Description"
    multiline
    rows={3}
    variant="outlined"
    value={formData.experience2?.description2 || ''}
    onChange={handleChangeAdd}
    helperText="Describe your responsibilities or achievements"
  />
</label>

</div>
        </AccordionDetails>
      </Accordion>


     </div>
    </div>
  );
};
