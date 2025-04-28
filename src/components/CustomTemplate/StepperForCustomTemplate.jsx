import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InfoForm } from "../../components/CustomTemplate/StepperInputData/InfoForm";
import React, { useState } from "react";
import { CustomEducationForm } from "./StepperInputData/CustomEducationForm";
import { CustomExperienceForm } from "./StepperInputData/CustomExperienceForm";
import { CustomAchievementForm } from "./StepperInputData/CustomAchievementForm";
import { useFormData } from './FormDataProvider'
import {CustomTemplate2PDF} from "../../components/CustomTemplate/PDF/CustomTemplate2PDF";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { DownloadBTN } from "./PDF/DownloadBTN";
const steps = [
  "Personal Info",
  "Education & Skills",
  "Experience & Projects",
  "Achievements & References",
];

export const StepperForCustomTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
 const {formData}=useFormData()
 

  const totalSteps = () => steps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleStep = (step) => () => setActiveStep(step);

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton  color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper> */}
        

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>


            {/* Download pdf */}
            {/* <PDFDownloadLink
              document={<CustomTemplate2PDF formData={formData} />}
              fileName="custom-template.pdf"
              className="btn bg-r-secondary text-white py-2 px-4 rounded"
            >
              {({ loading }) => (loading ? 'Preparing PDF...' : 'Download PDF')}
            </PDFDownloadLink> */}
            <DownloadBTN></DownloadBTN>

           
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                sx={{
                  backgroundColor: ` #588568`,
                  color: "#ffff",
                }}
                onClick={handleReset}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography
              sx={{
                color: "#ffff",
                backgroundColor: ` #588568`,
                mt: 2,
                mb: 1,
                p: 1,
                backgroundColor: "#344e41",
                width: "fit-content",
              }}
            >
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{ mr: 1, backgroundColor: ` #588568`, color: "#ffff" }}
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    sx={{ color: "black", border: "2px solid #588568" }}
                    onClick={handleComplete}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>

            <Box sx={{ mt: 2, mb: 1 }}>
              {/* Render step content directly here */}
              {activeStep === 0 && <InfoForm />}
              {activeStep === 1 && <CustomEducationForm />}
              {activeStep === 2 && <CustomExperienceForm />}
              {activeStep === 3 && <CustomAchievementForm />}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
