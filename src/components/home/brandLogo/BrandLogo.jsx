import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../../../assets/images/brandlogo/bdjobslogo.gif";
import logo2 from "../../../assets/images/brandlogo/careerjet.png";
import logo4 from "../../../assets/images/brandlogo/indeed.png";
import logo3 from "../../../assets/images/brandlogo/myjobs-logo.png";
import logo5 from "../../../assets/images/brandlogo/seek2.png";
import logo6 from "../../../assets/images/brandlogo/skill-logo.png";

const BrandLogo = () => {
  return (
    <div className="bg-r-card py-8">
      <Marquee>
        <div className=" flex space-x-5 ">
          <div className="max-w-64  border rounded-md p-1  bg-r-background">
            <img src={logo1} alt="brand logo" className="min-h-32" />
          </div>
          <div className="max-w-64 border rounded-md p-1  bg-r-background">
            <img src={logo2} alt="brand logo" className="min-h-32" />
          </div>
          <div className="max-w-64 border rounded-md p-1  bg-r-background">
            <img src={logo3} alt="brand logo" className="min-h-32" />
          </div>
          <div className="max-w-64 border rounded-md p-1  bg-r-background">
            <img src={logo4} alt="brand logo" className="min-h-32" />
          </div>
          <div className="max-w-64 border rounded-md p-1  bg-r-background">
            <img src={logo1} alt="brand logo" className="min-h-32" />
          </div>
          <div className="max-w-64 border rounded-md p-1  bg-r-background">
            <img src={logo5} alt="brand logo" className="min-h-32" />
          </div>
          <div className="max-w-64 border rounded-md p-1  bg-r-background mr-4">
            <img src={logo6} alt="brand logo" className="min-h-32" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default BrandLogo;
