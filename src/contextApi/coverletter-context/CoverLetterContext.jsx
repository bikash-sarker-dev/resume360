import { createContext, useState } from 'react';

export const CoverLetterContext = createContext();

const CoverLetterProvider = ({ children }) => {
  const [CoverLetterData, setCoverLetterData] = useState({
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

  const resetCoverLetterData = () => {
    setCoverLetterData({
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
  };

  return (
    <CoverLetterContext.Provider value={{ CoverLetterData, updateSection, resetCoverLetterData }}>
      {children}
    </CoverLetterContext.Provider>
  );
};

export default CoverLetterProvider;
