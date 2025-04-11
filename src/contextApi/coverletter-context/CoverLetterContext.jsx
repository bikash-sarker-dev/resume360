import { createContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export const CoverLetterContext = createContext();

const CoverLetterProvider = ({ children }) => {
  const { user } = useAuth();

  const initialData = {
    personalInfo: {
      userId: '', // default empty, set later
      fullName: '',
      address: '',
      cityZip: '',
      email: '',
      phone: '',
      linkedIn: '',
      portfolio: '',
      date: '',
    },
    hiringManager: {
      name: '',
      company: '',
      address: '',
      cityZip: '',
    },
    greeting: '',
    introduction: '',
    professionalExperience: '',
    skillsAndQualifications: '',
    goodFit: '',
    closing: '',
    ending: {
      formalClosing: '',
      signature: '',
    },
  };

  const [CoverLetterData, setCoverLetterData] = useState(initialData);

  // Update userId when user becomes available
  useEffect(() => {
    if (user?.uid) {
      setCoverLetterData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          userId: user.uid,
        },
      }));
    }
  }, [user]);

  const updateSection = (section, data) => {
    setCoverLetterData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const resetCoverLetterData = () => {
    setCoverLetterData({
      ...initialData,
      personalInfo: {
        ...initialData.personalInfo,
        userId: user?.uid || '', // safe fallback
      },
    });
  };

  return (
    <CoverLetterContext.Provider value={{ CoverLetterData, updateSection, resetCoverLetterData }}>
      {children}
    </CoverLetterContext.Provider>
  );
};

export default CoverLetterProvider;
