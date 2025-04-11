import { createContext, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const {user} = useAuth();
  const [resumeData, setResumeData] = useState({
    user: [user],
    personalInfo: [],
    education: [],
    skills: [],
    socialLinks: [],
    projects: [],
    experience: [],
    languages: [], 
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
