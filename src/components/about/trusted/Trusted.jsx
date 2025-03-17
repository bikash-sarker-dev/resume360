import React, { useEffect, useState } from 'react';

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
    <div className="bg-r-info-card py-24">
        <h1 className='text-center text-xl font-bold'>Trusted by the world's most innovative teams</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {companies.map((company) => ( 
              <div key={company.id} className="bg-r-info rounded-md text-center py-8 px-4 shadow-lg">
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src={company.icon}
                    alt={company.name}
                    className="h-16 w-16 object-contain"
                    loading="lazy"
                  />
                  <h1 className="text-2xl font-bold">{company.name}</h1>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
