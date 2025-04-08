

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data.teams);
      });
  }, []);

  return (
    <div className="container mx-auto py-16">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
        <p className="text-lg md:text-xl text-gray-600 mt-3">
          We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-8">
        {teams.map((team) => (
          <div key={team.id} className="card bg-base-100 shadow-sm overflow-hidden">
            <figure className="overflow-hidden h-[300px] w-full bg-gray-200">
              <motion.img
                className="h-full w-full object-cover"
                src={team.image}
                alt={team.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </figure>
            <div className="card-body flex flex-col justify-between space-y-2">
              <h2 className="card-title">{team.name}</h2>
              <span>{team.title}</span>
              <p>{team.description}</p>
              <div className="card-actions flex space-x-4 text-xl">
               
                {team.socialLinks && (
                  <>
                    <a href={team.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href={team.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href={team.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;


