import React from "react";

const SectionHead = ({ subTitle, title }) => {
  return (
    <>
      <div className="text-center">
        <h4 className="text-xl text-r-text opacity-50">{subTitle}</h4>
        <h2 className="text-[42px] text-r-text font-bold mt-1 max-w-2xl mx-auto">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionHead;
