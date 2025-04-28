import React from "react";
import { Link } from "react-router";

export const TemplateTab = ({ title, templates }) => {
  return (
    <div  className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  pt-4 ">
      {templates.map((template, idx) => (
       <Link
       className="relative"
       to={`customtemplate/${template.id}`}>
        <img key={idx} src={template.url} alt="" />
        <button className="bg-r-accent btn absolute ">Customize</button>
       </Link>
      ))}
    </div>
  );
};
