
import React, { useEffect, useState } from 'react';

const OurValues = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch("values.json")
            .then((res) => res.json())
            .then((data) => {
                setValues(data.values);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            
            <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden'>
                <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Our Values"
                    className="w-full h-full object-cover"
                />
            </div>
            
            
            <div className='mt-6 py-8'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
                <p className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2  text-gray-700'>
                At Resume360, we believe in empowering job seekers by providing a seamless and accessible platform to create professional resumes. Our core values define how we operate and what we stand for:
                    
                </p>
            </div>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {values.map((value, index) => (
                    <div key={index} className="">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurValues;