import { createContext, useState } from 'react';

export const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    education: [],
    skills: [],
    socialLinks: [],
    projects: [],
    experience: [],
  });

  const updateSection = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateSection }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
