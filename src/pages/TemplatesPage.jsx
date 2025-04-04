import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionHead from "../components/header/section-head/SectionHead";
import { TemplateTab } from "../components/TemplatePage/TemplateTab";

const TemplatesPage = () => {
  const [templetes, setTemplates] = useState([]);
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
        <Tabs>
          <div>
            <TabList>
              <Tab>Resume</Tab>
              <Tab>Cover Letter</Tab>
              <Tab>CV</Tab>
            </TabList>
          </div>

          {/* Resume Tab */}
          <TabPanel>
            <TemplateTab title="Resume" templates={resume} />
          </TabPanel>

          {/* Cover Letter Tab */}
          <TabPanel>
            <TemplateTab title="Cover Letter" templates={coverLetter} />
          </TabPanel>

          {/* CV Tab */}
          <TabPanel>
            <TemplateTab title="CV" templates={cv} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TemplatesPage;
