import React from "react";
import Banner from "../components/Banner/Banner";
import { Blogs } from "../components/home/Blogs/Blogs";
import BrandLogo from "../components/home/brandLogo/BrandLogo";
import Counter from "../components/home/counter/Counter";
import ProfessionalTemplate from "../components/home/pro-Templates/ProfessionalTemplate";
import { Subscriptions } from "../components/home/Subscriptions/Subscriptions";
import { Testimonials } from "../components/home/testimonials/Testimonials";
import FeaturesSection from "./../components/home/features/FeaturesSection";
import StepsSection from "./../components/home/stepsBySteps/StepsSection";


const HomePage = () => {
  return (
    <div>
      <Banner />
      <BrandLogo />
      <FeaturesSection />
      <StepsSection />
      <ProfessionalTemplate />
      <Counter />
      <Subscriptions></Subscriptions>
      <Blogs></Blogs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
