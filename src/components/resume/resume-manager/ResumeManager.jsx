import React, { useState } from 'react';
import ResumeList from './resume-list/ResumeList';
import { TextField } from '@mui/material';
import SectionHead2 from '../../header/section-head/SectionHead2';
import { Link } from 'react-router';

const ResumeManager = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='max-w-7xl mx-auto py-30'>
      <div className='flex justify-between mb-5'>
        <div>
          <SectionHead2
            title={"Resume Manager"}
            subTitle={"Organize your uploaded resumes and save time with new job applications"}
          />
        </div>
        <div>
          <TextField
            name="Search"
            label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/create-resume" className='btn bg-r-accent text-r-text hover:bg-r-primary hover:text-white h-14 ml-4'>Generate Resume</Link>
        </div>
      </div>
      <ResumeList searchTerm={searchTerm} />
    </div>
  );
};

export default ResumeManager;
