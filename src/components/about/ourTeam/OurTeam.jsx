import React, { useEffect, useState } from "react";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/teams.json")
    .then(res =>res.json())
    .then(data => {
        setTeams(data.teams)
    })
      
  }, []);




  return (
    <div className="container mx-auto py-16">
     
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Team
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mt-3">
          We're a dynamic group of indiv.......
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8">
        {teams.map((team) => (
          <div key={team.id} className="card bg-base-100 shadow-sm">
            <figure className="hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                className="h-[250px] object-cover w-full"
                src={team.thumbnail}
                alt={team.title}
              />
            </figure>
            <div className="card-body flex flex-col justify-between space-y-2">
              <h2 className="card-title">{team.name}</h2>
              <span>{team.title}</span>
              
              <p className="">{team.description}</p>
              <div className="card-actions flex ">
                {/* <div className="w-12 h-12 rounded-full mr-3"> */}
                <i className="w-12 h-12 rounded-full  fa-brands fa-facebook"></i>
                <i className="w-12 h-12 rounded-full  fa-brands fa-facebook"></i>
                <i className="w-12 h-12 rounded-full  fa-brands fa-facebook"></i>
                 
                {/* </div> */}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
