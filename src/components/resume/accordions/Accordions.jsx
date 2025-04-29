import { useState } from "react";
import SocialLinksList from "../social-links/SocialLinksList";
import Skill from "../skill/Skill";
import ResumeLanguageSection from "../language/ResumeLanguageSection ";

const AccordionItem = ({ index, title, content, isOpen, toggle }) => {
  return (
    <div className="border border-base-300 bg-white shadow-lg rounded-lg overflow-hidden">
      <button
        onClick={() => toggle(index)}
        className="w-full flex justify-between items-center py-5 px-6 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-max px-6 pb-4" : "max-h-0"}`}>
        <div className="text-gray-700 text-sm">{content}</div>
      </div>
    </div>
  );
};

const Accordions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "Add Skill", content: <Skill /> },
    { title: "Add Link", content: <SocialLinksList /> },
    { title: "Language", content: <ResumeLanguageSection /> }
  ];

  return (
    <div className="w-full max-w-lg mx-auto space-y-4 p-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggle={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default Accordions;