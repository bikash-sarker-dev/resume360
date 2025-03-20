import React from "react";
import ConnectingPeople from "../components/about/connectingPeople/ConnectingPeople";
import FromBlog from "../components/about/fromBlog/FromBlog";
import OurMission from "../components/about/ourMission/OurMission";
import OurTeam from "../components/about/ourTeam/OurTeam";
import OurValues from "../components/about/ourValues/OurValues";
import Trusted from "../components/about/trusted/Trusted";

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
