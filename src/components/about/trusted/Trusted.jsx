import React, { useEffect, useState } from "react";
import BrandLogo from "../../home/brandLogo/BrandLogo";

const Trusted = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("trusted.json")
      .then((res) => res.json())
      .then((data) => {
        setCompanies(data.companies);
      });
  }, []);

  return (
    <div className="bg-r-card">
      <div className="container">
        <BrandLogo />
      </div>
    </div>
  );
};

export default Trusted;
