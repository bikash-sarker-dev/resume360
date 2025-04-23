import React, { useState } from 'react';
import CoverLetterList from './cover-letter-list/CoverLetterList';
import { TextField } from '@mui/material';
import SectionHead2 from '../../header/section-head/SectionHead2';

const CoverLetterManager = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='max-w-7xl mx-auto py-30'>
      <div className='flex justify-between mb-5'>
        <div>
          <SectionHead2
            title={"Cover Letter Manager"}
            subTitle={"Manage and organize your saved cover letters effortlessly"}
          />
        </div>
        <div>
          <TextField
            name="Search"
            label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <CoverLetterList searchTerm={searchTerm} />
    </div>
  );
};

export default CoverLetterManager;
