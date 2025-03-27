import React from "react";

const ButtonTemplate = ({
  handleResume,
  handleCv,
  handleCoverLetter,
  resume,
  cv,
  coverLetter,
}) => {
  return (
    <div className="space-x-8 text-center mt-6">
      <button
        onClick={handleResume}
        className={` ${
          resume && "bg-r-primary"
        } relative inline-flex items-center justify-center px-8 py-3 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn`}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
        <span className="relative">Resume</span>
      </button>
      <button
        onClick={handleCv}
        className={` ${
          cv && "bg-r-primary"
        } relative inline-flex items-center justify-center px-8 py-3 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn`}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
        <span className="relative">CV</span>
      </button>
      <button
        onClick={handleCoverLetter}
        className={` ${
          coverLetter && "bg-r-primary"
        } relative inline-flex items-center justify-center px-8 py-3 overflow-hidden  font-bold  text-r-text bg-r-background rounded-lg group slide-up slide-up-btn`}
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-r-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-r-primary "></span>
        <span className="relative">Cover latter</span>
      </button>
    </div>
  );
};

export default ButtonTemplate;
