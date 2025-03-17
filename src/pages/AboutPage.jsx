import React from "react";
import OurTeam from "../components/about/ourTeam/OurTeam";
import Trusted from "../components/about/trusted/Trusted";
import ConnectingPeople from "../components/about/connectingPeople/ConnectingPeople";
import OurMission from "../components/about/ourMission/OurMission";
import OurValues from "../components/about/ourValues/OurValues";

const AboutPage = () => {
  return (
    <div>
      <ConnectingPeople></ConnectingPeople>
      <OurMission></OurMission>
     <OurTeam></OurTeam>
     <OurValues></OurValues>
     <Trusted></Trusted>

    </div>
  );
};

export default AboutPage;
