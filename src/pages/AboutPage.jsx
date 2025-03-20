import React from "react";
import OurTeam from "../components/about/ourTeam/OurTeam";
import Trusted from "../components/about/trusted/Trusted";
import ConnectingPeople from "../components/about/connectingPeople/ConnectingPeople";
import OurMission from "../components/about/ourMission/OurMission";
import OurValues from "../components/about/ourValues/OurValues";
import FromBlog from "../components/about/fromBlog/FromBlog";
import TemplateTwo from "../components/DefaultTemplates/TemplateTwo"
import TemplateFive from "../components/DefaultTemplates/TemplateFive";

const AboutPage = () => {
  return (
    <div>
      <ConnectingPeople></ConnectingPeople>
      <OurMission></OurMission>
    
     <OurValues></OurValues>
     <Trusted></Trusted>
     <OurTeam></OurTeam>
     <FromBlog></FromBlog>
     

    
     

     

  

    </div>
  );
};

export default AboutPage;
