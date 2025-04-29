import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export const ResumeContext = createContext();

const ResumeProvider = ({ children }) => {
  const { user } = useAuth();

  const getInitialResumeData = () => {
    const cookieData = Cookies.get('resumeData');
    return cookieData
      ? JSON.parse(cookieData)
      : {
          user: [user],
          personalInfo: [],
          education: [],
          skills: [],
          socialLinks: [],
          projects: [],
          experience: [],
          languages: [],
        };
  };

  const [resumeData, setResumeData] = useState(getInitialResumeData());

  // Save to cookies on change
  useEffect(() => {
    Cookies.set('resumeData', JSON.stringify(resumeData), { expires: 7 }); // Expires in 7 days
  }, [resumeData]);

  const updateSection = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const resetResumeData = () => {
    setResumeData({
      user: [user],
      personalInfo: [],
      education: [],
      skills: [],
      socialLinks: [],
      projects: [],
      experience: [],
      languages: [],
    });
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateSection, resetResumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

export default ResumeProvider;
