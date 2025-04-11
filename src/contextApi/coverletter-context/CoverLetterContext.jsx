import { createContext, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export const CoverLetterContext = createContext();

const CoverLetterProvider = ({ children }) => {
  const { user } = useAuth();
  
  const [CoverLetterData, setCoverLetterData] = useState({
    user: user,
    personalInfo: [],
    hiringManager: [],
    greeting: '',
    introduction: '',
    professionalExperience: '',
    skillsAndQualifications: '',
    goodFit: '',
    closing: '',
    ending: [],
  });

  const updateSection = (section, data) => {
    setCoverLetterData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  return (
    <CoverLetterContext.Provider value={{ CoverLetterData, updateSection }}>
      {children}
    </CoverLetterContext.Provider>
  );
};

export default CoverLetterProvider;
