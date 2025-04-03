import React from "react";
import FAQ from "../components/FAQ/FAQ";
import SectionHead from "../components/header/section-head/SectionHead";

const FaqPage = () => {
  return <div className="container pb-8 pt-28 lg:pb-12">
  <SectionHead
    subTitle={"Frequesntly Asked Questions"}
    title={"FAQ"}
  />
  <div className="divider"></div>
  <FAQ></FAQ>
</div>
};

export default FaqPage;
