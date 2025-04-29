import React from "react";
import { Link } from "react-router";

export const TemplateTab = ({ title, templates }) => {
console.log(templates.custom);
  return (
    <div  className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-4 ">
       {templates.map((template, idx) => (
    <div key={idx} className="relative group">
      <img src={template.url} alt="" className="w-full h-auto" />
      
      {/* Centered link button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Link to={`customtemplate/${template.id}`}>
          <button  disabled={!template.custom}
          className={`btn btn-outline bg-r-accent ${!template.custom ? 
          'pacity-90 text-black/50 ocursor-not-allowed' : ''}`}>Customize</button>
        </Link>
      </div>
    </div>
  ))}
    </div>
  );
};
