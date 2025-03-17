import React from "react";
import FAQ from "../components/FAQ/FAQ";

const FaqPage = () => {
  return <div className="container pb-8 pt-28 lg:pb-12">
  <p className="text-center">
  Frequesntly Asked Questions</p>
  <h2 className="text-2xl lg:text-3xl font-bold text-center mt-3 mb-5">FAQ</h2>
  <div className="divider"></div>
  <FAQ></FAQ>
</div>
};

export default FaqPage;
