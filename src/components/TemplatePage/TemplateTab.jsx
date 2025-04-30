import React from "react";
import { Link } from "react-router";


export const TemplateTab = ({ title, templates }) => {
  return (
    <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {templates.map((template, idx) => (
          <div key={idx} className="bg-white flex flex-col rounded overflow-hidden shadow-md hover:scale-[1.01] transition-all relative">
            <Link to={`customtemplate/${template.id}`} className="block">
              <div className="w-full">
                <img
                  src={template.url}
                  alt={template.name || `Template ${idx + 1}`}
                  className="w-full aspect-[18/24] object-cover object-top"
                />
              </div>
            </Link>
            <div className="min-h-[50px] p-4 !pt-0">
              <button
                type="button"
                disabled={!template.custom}
                className={`absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto text-sm px-2 py-2 font-medium w-full ${
                  template.custom
                    ? "bg-r-accent hover:bg-r-primary text-white"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                } tracking-wide outline-none border-none rounded`}
              >
                {template.custom ? "Customize" : "Not Customizable"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
