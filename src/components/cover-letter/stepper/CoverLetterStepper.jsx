import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonalInfo from '../personal-info/PersonalInfo';
import EmployerInfo from '../employerInfo/EmployerInfo';
import Greeting from '../greeting/Greeting';
import ErrorPage from '../../../pages/ErrorPage';
import CoverLetterLivePreview from '../cover-letter-live-preview/CoverLetterLivePreview';
import CoverLetterBody from '../cover-letter-body/CoverLetterBody';
import Signature from '../signature/Signature';
import CoverLetterDownload from '../cover-letter-download/CoverLetterDownload';
import { CoverLetterContext } from '../../../contextApi/coverletter-context/CoverLetterContext'; 
import Cookies from 'js-cookie';

const renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <EmployerInfo />;
    case 2:
      return <Greeting />;
    case 3:
      return <CoverLetterBody />;
    case 4:
      return <Signature />;
    default:
      return <ErrorPage />;
  }
};

const steps = ['My Info', 'HR', 'Greeting', 'Body', 'Signature'];

const StepperComponents = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const { resetCoverLetterData } = React.useContext(CoverLetterContext);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    Cookies.remove('coverLetterData');
    setActiveStep(0);
    resetCoverLetterData();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Box className="mb-10 bg-white py-10 px-6 shadow-xl" sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  {...labelProps}
                  StepIconProps={{
                    style: {
                      color: activeStep === index ? '#344e41' : '#7dc696', // customize as needed
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              <Box>
                <CoverLetterDownload />
              </Box>
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              {activeStep !== 0 && (
                <button
                  className="rounded-full text-white bg-r-primary py-2 px-5"
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </button>
              )}
              <Box sx={{ flex: '1 1 auto' }} />
              <button className="rounded-full text-white bg-r-primary py-2 px-5" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </Box>
            <Box sx={{ mt: 2, mb: 1 }}>
              {renderStepContent(activeStep)}
            </Box>
          </React.Fragment>
        )}
      </Box>
      <div className='hidden md:block'>
        <CoverLetterLivePreview />
      </div>
    </div>
  );
};

export default StepperComponents;
