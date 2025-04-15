import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import SectionHead from "../components/header/section-head/SectionHead";
import { TemplateTab } from "../components/TemplatePage/TemplateTab";

const TemplatesPage = () => {
  const [templetes, setTemplates] = useState([]);
  let [resumebtn, setResume] = useState(true);
  let [cvbtn, setCv] = useState(false);
  let [coverLetterbtn, setCoverLetter] = useState(false);

  const handleResume = () => {
    setResume(true);
    setCv(false);
    setCoverLetter(false);
  };
  const handleCv = () => {
    setResume(false);
    setCoverLetter(false);
    setCv(true);
  };

  const handleCoverLetter = () => {
    setResume(false);
    setCv(false);
    setCoverLetter(true);
  };

  useEffect(() => {
    fetch("/templetes.json")
      .then((res) => res.json())
      .then((data) => setTemplates(data.images))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const coverLetter = templetes.filter(
    (template) => template.category === "coverLetter"
  );
  const cv = templetes.filter((template) => template.category === "CV");
  const resume = templetes.filter((template) => template.category === "resume");

  return (
    <div className="py-24 container mx-auto">
      <SectionHead
        subTitle="Browse Our Collection"
        title="All Templates"
      ></SectionHead>

      <div>
        <div className="flex gap-4 justify-center my-8  ">
          <button
            onClick={handleResume}
            className={`py-7 w-20 md:w-40 btn bg-r-primary rounded-full`}
          >
            Resume
          </button>
          <button
            onClick={handleCv}
            className="btn py-7  w-20 md:w-40 bg-r-primary rounded-full 
   "
          >
            CV
          </button>
          <button
            onClick={handleCoverLetter}
            className="btn w-20 md:w-40 py-7 bg-r-primary rounded-full 
   "
          >
            Cover Letter
          </button>
        </div>
      </div>
      <div>
        {resumebtn && <TemplateTab title="Resume" templates={resume} />}
        {cvbtn && <TemplateTab title="CV" templates={cv} />}
        {coverLetterbtn && (
          <TemplateTab title="Cover Letter" templates={coverLetter} />
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;
