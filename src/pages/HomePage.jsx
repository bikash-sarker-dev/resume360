import React from "react";
import FeaturesSection from "./homeComponents/FeaturesSection";
import StepsSection from "./homeComponents/StepsSection";


const HomePage = () => {
  return <>
    <div>HomePage</div>


    {/* feacher section import */}
    <div><FeaturesSection></FeaturesSection></div>

    {/* step by step section added */}
    <div><StepsSection></StepsSection></div>
  </>;
};

export default HomePage;
