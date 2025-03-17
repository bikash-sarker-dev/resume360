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
          <div className='w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden '>
          <img src="https://img.freepik.com/free-photo/authentic-small-youthful-marketing-agency_23-2150167428.jpg?t=st=1742181704~exp=1742185304~hmac=f93b040943214af9b4c94cd166309c1717c5c6052b4e85f3e32b955e90f5d40b&w=1380" alt="" srcset="" />
          </div>
           <div className='mt-2 py-8'>
           <h2 className="text-3xl font-bold mb-10">Our Values</h2>
           <p className='w-1/2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt fuga illo! Distinctio, suscipit! Minus corrupti eaque dolore dicta ipsam vero fugit iure repudianda</p>
           </div>

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