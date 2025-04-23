import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

export const CoverLetterContext = createContext();

const CoverLetterProvider = ({ children }) => {
  const { user } = useAuth();

  const initialData = {
    personalInfo: {
      userId: '',
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

  const getInitialData = () => {
    const cookieData = Cookies.get('coverLetterData');
    return cookieData ? JSON.parse(cookieData) : initialData;
  };

  const [CoverLetterData, setCoverLetterData] = useState(getInitialData);

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

  // Save to cookies on change
  useEffect(() => {
    Cookies.set('coverLetterData', JSON.stringify(CoverLetterData), { expires: 7 });
  }, [CoverLetterData]);

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
        userId: user?.uid || '',
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
