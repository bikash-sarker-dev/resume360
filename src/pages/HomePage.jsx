import React from "react";
import Banner from "../components/home/Banner/Banner";
import FeaturesSection from "../components/home/features/FeaturesSection";
import StepsSection from "../components/home/stepsBySteps/StepsSection";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <StepsSection />
    </div>
  );
};

export default HomePage;
