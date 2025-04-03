import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const Trusted = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("trusted.json")
      .then((res) => res.json())
      .then((data) => {
      
          setCompanies(data.companies);
       
      })
      
  }, []);


  

  return (
   <div  className=" mx-auto py-16">
    
     <div className="bg-r-info-card py-24">
        <h1 className='text-center text-2xl font-bold'>Trusted by the world's most innovative teams</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {companies.map((company) => ( 
              <div key={company.id} className=" rounded-md text-center py-8 px-4 shadow-lg">

                

                <Marquee > <div className="flex gap-2 items-center justify-center">
                  <img
                    src={company.icon}
                    alt={company.name}
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                  />
                  <h1 className="text-2xl font-bold">{company.name}</h1>
                </div> </Marquee>
              </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Trusted;



