import React, { useEffect, useState } from 'react';

const OurValues = () => {

    const[values, setValues] = useState([]);
     useEffect(() => {
        fetch("values.json")
          .then((res) => res.json())
          .then((data) => {
          
              setValues(data.values);
           
          })
          
      }, []);
      return (
        <div className="container mx-auto py-16 px-6">
            <h2 className="text-3xl font-bold mb-10">Our Values</h2>
            <p className='w-1/2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt fuga illo! Distinctio, suscipit! Minus corrupti eaque dolore dicta ipsam vero fugit iure repudianda</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {values.map((value, index) => (
                    <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-600">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default OurValues;