import * as React from 'react';
import { TextField } from '@mui/material';
import { useState, useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';


const Greeting = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);
  const [greeting] = useState(CoverLetterData.greeting || '');

  const handleChange = (e) => {
    const { value } = e.target;
    updateSection('greeting', value);
  };

  return (
    <div className="grid grid-cols-1 px-4 space-y-5 mt-5">
      <TextField
        className="w-full"
        required
        name="greeting"
        label="Greeting"
        value={greeting}
        onChange={(e) => handleChange(e)}
        helperText="How would you like to greet the employer?"
      />
    </div>
  );
};

export default Greeting;
