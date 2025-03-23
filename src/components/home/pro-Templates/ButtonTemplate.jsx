import React from "react";

const ButtonTemplate = ({ handleResume, handleCv, handleCoverLetter }) => {
  return (
    <div className="space-x-10 text-center mt-8">
      <button
        onClick={handleResume}
        class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
        <span class="relative">Resume</span>
      </button>
      <button
        onClick={handleCv}
        class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
        <span class="relative">CV</span>
      </button>
      <button
        onClick={handleCoverLetter}
        class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn"
      >
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
        <span class="relative">Cover latter</span>
      </button>
    </div>
  );
};

export default ButtonTemplate;
