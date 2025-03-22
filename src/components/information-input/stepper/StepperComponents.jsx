import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EducationList from "../education/EducationList";
import PersonalInfo from "../personal-info/PersonalInfo";
import Skill from "../skill/skill";
import SocialLinksList from "../social-links/SocialLinksList";
import LivePreview from '../live-preview/LivePreview';
import SectionHead from '../../header/section-head/SectionHead';
import ProjectList from '../project/ProjectList';
import ExperienceList from '../expreance/ExperienceList';
import ErrorPage from '../../../pages/ErrorPage';

const renderStepContent = (step) => {
  switch (step) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <EducationList />;
    case 2:
      return <Skill />;
    case 3:
      return <SocialLinksList />;
    case 4:
      return <ProjectList/>;
    case 5:
      return <ExperienceList/>;
    default:
      return <ErrorPage></ErrorPage>;
  }
};

const steps = ['Your Info', 'Edu', 'Skills', 'Links', 'Project', 'Experience'];

const StepperComponents = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

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
    setActiveStep(0);
  };

  return (
    <Box className="mb-10" sx={{ width: '100%' }}>
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
                sx={{
                  color: activeStep === index ? 'r-primary' : 'text.secondary', // Apply r-primary color for active step
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
            <SectionHead
              subTitle={"This is your final output of resume"}
              title={"Final Result"}
            />
            <div className='flex justify-center'>
              <LivePreview></LivePreview>
            </div>
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>
            {renderStepContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <button
              className='rounded-full text-white bg-r-primary py-2 px-5'
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </button>
            <Box sx={{ flex: '1 1 auto' }} />
            <button className='rounded-full text-white bg-r-primary py-2 px-5' onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};

export default StepperComponents;
