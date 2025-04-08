import React from "react";
import TemplateFive from "../components/DefaultTemplates/TemplateFive";
import TemplateFour from "../components/DefaultTemplates/TemplateFour";
import TemplateOne from "../components/DefaultTemplates/TemplateOne";
import TemplateThree from "../components/DefaultTemplates/TemplateThree";
import TemplateTwo from "../components/DefaultTemplates/TemplateTwo";

const BlogPage = () => {
  return (
    <div className="">
      <TemplateOne />
      <TemplateTwo />
      <TemplateThree />
      <TemplateFour />
      <TemplateFive />
    </div>
  );
};

export default BlogPage;
