import React from "react";
import { Blogs } from "../components/home/Blogs/Blogs";
import BrandLogo from "../components/home/brandLogo/BrandLogo";
import Counter from "../components/home/counter/Counter";
import ProfessionalTemplate from "../components/home/pro-Templates/ProfessionalTemplate";
import { Subscriptions } from "../components/home/Subscriptions/Subscriptions";

import Banner from "../components/Banner/Banner";
import FeaturesSection from "./../components/home/features/FeaturesSection";
import StepsSection from "./../components/home/stepsBySteps/StepsSection";
import Festibal from "../components/header/Festibal";

const HomePage = () => {
  return (
    <div>
      <div className="  mt-10">
        <Festibal></Festibal>
      </div>
      <Banner />
      <BrandLogo />
      <FeaturesSection />
      <StepsSection />
      <ProfessionalTemplate />
      <Counter />
      <Subscriptions></Subscriptions>
      <Blogs></Blogs>
    </div>
  );
};

export default HomePage;
