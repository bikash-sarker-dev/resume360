import React from "react";

const ButtonTemplate = ({ handleResume, handleCv, handleCoverLetter }) => {
  return (
    <div className="space-x-10 text-center mt-8">
      <button
        onClick={handleResume}
        className="px-8 py-3 rounded-3xl bg-r-secondary hover:bg-r-accent transition-all duration-300 hover:text-r-background"
      >
        Resume
      </button>
      <button
        onClick={handleCv}
        className="px-8 py-3 rounded-3xl bg-r-secondary hover:bg-r-accent transition-all duration-300 hover:text-r-background"
      >
        CV
      </button>
      <button
        onClick={handleCoverLetter}
        className="px-8 py-3 rounded-3xl bg-r-secondary hover:bg-r-accent transition-all duration-300 hover:text-r-background"
      >
        Cover letter
      </button>
    </div>
  );
};

export default ButtonTemplate;
