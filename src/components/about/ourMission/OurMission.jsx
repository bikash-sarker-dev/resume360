

import React from 'react';

const OurMission = () => {
    return (
       <div className="container mx-auto py-16 px-4">
         <div className='grid grid-cols-1 md:grid-cols-12 gap-4 mx-auto'>

            <div className='md:col-span-9 space-y-6'>
                <h1 className='text-2xl font-bold'>Our Mission</h1>
                <h3 className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto totam, ut porro quis repellendus alias beatae deserunt cumque labore libero aliquid fugiat fuga eos ratione sapiente natus vel, soluta similique?</h3>
                <h4 className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur natus accusamus voluptate, nam labore, aut praesentium veritatis voluptatum iusto doloribus explicabo tenetur aspernatur? Accusamus fugiat perferendis totam quaerat sequi fuga!</h4>
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