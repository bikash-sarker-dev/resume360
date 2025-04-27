// FormDataContext.js
import React, { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export const useFormData = () => {
  return useContext(FormDataContext);
};

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    phoneNumber: '',
    email: '',
    address: '',
    nationality: '',
    dob: '',
    gender: '',
    aboutMe: '',
    // Your other fields...
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
