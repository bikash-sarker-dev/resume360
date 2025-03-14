import React from "react";
import Banner from "../components/home/Banner/Banner";
import Counter from "../components/home/counter/Counter";
import FeaturesSection from "../components/home/features/FeaturesSection";
import ProfessionalTemplate from "../components/home/pro-Templates/ProfessionalTemplate";
import StepsSection from "../components/home/stepsBySteps/StepsSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <StepsSection />
      <ProfessionalTemplate />
      <Counter />
    </div>
  );
};

export default HomePage;
