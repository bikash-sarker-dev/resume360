

import React from 'react';

const OurMission = () => {
    return (
       <div className="container mx-auto py-16 px-4">
         <div className='grid grid-cols-1 md:grid-cols-12 gap-4 mx-auto'>

            <div className='md:col-span-9 space-y-6'>
                <h1 className='text-2xl font-bold'>Our Mission</h1>
                <h3 className='text-lg'>At Resume360, our mission is to empower individuals by providing an intuitive and efficient platform to create standout resumes that reflect their unique skills and experiences. We aim to help job seekers navigate the competitive job market with confidence, offering a tool that is easy to use, accessible to all, and designed to help them land their dream jobs. Our goal is to transform the way resumes are built, ensuring that everyone, regardless of background or career stage, can craft a professional resume that opens doors to new opportunities.</h3>
                <h4 className='text-base'>Our mission is to provide users with a simple, powerful tool to create personalized resumes that reflect their unique strengths. By offering an intuitive platform, we aim to help individuals confidently present themselves to employers and take the next step in their career journeys.</h4>
            </div>

            <div className='md:col-span-3 flex flex-col space-y-6'>
                <div>
                    <h1 className='text-xl font-semibold'>44 million</h1> 
                    <p>Transactions every 24 hours</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>1.5 billion</h1> 
                    <p>Processed annually</p>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>99.9%</h1> 
                    <p>Uptime guarantee</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default OurMission;