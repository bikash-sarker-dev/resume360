import React from "react";

const Counter = () => {
  return (
    <div className="bg-r-info-card py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-r-info rounded-md text-center py-14 px-8">
            <h1 className="text-4xl font-extrabold">252 +</h1>
            <h3 className="text-xl font-semibold mt-2">Clients</h3>
          </div>
          <div className="bg-r-info rounded-md text-center py-14 px-8">
            <h1 className="text-4xl font-extrabold">141 +</h1>
            <h3 className="text-xl font-semibold mt-2">Resume Template</h3>
          </div>
          <div className="bg-r-info rounded-md text-center py-14 px-8">
            <h1 className="text-4xl font-extrabold">60 +</h1>
            <h3 className="text-xl font-semibold mt-2">CV Template</h3>
          </div>
          <div className="bg-r-info rounded-md text-center py-14 px-8">
            <h1 className="text-4xl font-extrabold">10 +</h1>
            <h3 className="text-xl font-semibold mt-2">Cover Letter</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
