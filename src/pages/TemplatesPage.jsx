import React, { act, useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import SectionHead from "../components/header/section-head/SectionHead";
import { TemplateTab } from "../components/TemplatePage/TemplateTab";

const TemplatesPage = () => {
  const [templetes, setTemplates] = useState([]);
  let [resumebtn, setResume] = useState(true);
  let [cvbtn, setCv] = useState(false);
  let [coverLetterbtn, setCoverLetter] = useState(false);


  const [active,setActive]=useState("resume")
  const handleResume = () => {
    setResume(true);
    setCv(false);
    setCoverLetter(false);

    setActive("resume");
    console.log(active);
  };
  const handleCv = () => {
    setResume(false);
    setCoverLetter(false);
    setCv(true);

    setActive("cv");
    console.log(active);
  };

  const handleCoverLetter = () => {
    setResume(false);
    setCv(false);
    setCoverLetter(true);

     setActive("cover");
    console.log(active);
  };

useEffect(()=>{
  console.log("Now active:", active);
},[active])


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
            className={`py-7 w-20 md:w-40 btn  rounded-full
              ${active==="resume" ?"bg-r-primary shadow-2xl text-white":"bg-r-secondary text-black"}
              `}
          >
            Resume
          </button>
          <button
            onClick={handleCv}
            className={`btn py-7  w-20 md:w-40 bg-r-primary rounded-full
                 ${active==="cv" ?"bg-r-primary text-white shadow-2xl":"bg-r-secondary text-black"}
              `}
          >
            CV
          </button>
          <button
            onClick={handleCoverLetter}
            className={`btn w-20 md:w-40 py-7 bg-r-primary rounded-full
                 ${active==="cover" ?"bg-r-primary text-white shadow-2xl":"bg-r-secondary text-black "}
              `}
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
