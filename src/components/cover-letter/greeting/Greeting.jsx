import * as React from 'react';
import { TextField } from '@mui/material';
import { useContext } from 'react';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext';

const Greeting = () => {
  const { CoverLetterData, updateSection } = useContext(CoverLetterContext);

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
        value={CoverLetterData.greeting || ''}
        onChange={handleChange}
        helperText="How would you like to greet the employer?"
      />
    </div>
  );
};

export default Greeting;
