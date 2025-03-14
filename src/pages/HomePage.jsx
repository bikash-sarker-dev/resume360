import React from "react";
import Counter from "../components/home/counter/Counter";
import ProfessionalTemplate from "../components/home/pro-Templates/ProfessionalTemplate";
import Banner from "../components/Banner/Banner";
import BrandLogo from "../components/home/brandLogo/BrandLogo";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <BrandLogo></BrandLogo>
      <ProfessionalTemplate />
      <Counter />
    </div>
  );
};

export default HomePage;
