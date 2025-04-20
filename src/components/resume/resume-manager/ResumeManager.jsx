import React from 'react';
import ResumeList from './resume-list/ResumeList';
import { TextField } from '@mui/material';
import SectionHead2 from '../../header/section-head/SectionHead2';

const ResumeManager = () => {
    return (
        <div className='max-w-7xl mx-auto py-30'>
            <div className='flex justify-between mb-5'>
                <div className=''>
                    <SectionHead2
                        title={"Resume Manager"}
                        subTitle={"Organize your uploaded resumes and save time with new job applications"}
                    />
                </div>
                <div>
                    <TextField
                        name="Search"
                        label="Search"
                    />
                </div>
            </div>
            <ResumeList />
        </div>
    );
};

export default ResumeManager;