import { useState } from "react";
import Stepper from "./stepper";
import Step from "./step";
import StepLabel from "./stepLabel";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "asad",
  "ali",
  "zain",
  "raza"
];

const NonLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());



  const handleNext = () => {
    let newSkipped = skipped;
    

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
    <div className="w-full">
      <Stepper currentStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={index} index={index}>
            <StepLabel label={label}  />
          </Step>
        ))}
      </Stepper>
      <div className="mt-4">
        {activeStep === steps.length ? (
          <>
            <div>All steps completed - youre finished</div>
            <button onClick={handleReset} className="btn btn-primary">
              Reset
            </button>
          </>
        ) : (
          <>
            <div>Step {activeStep + 1}</div>
            <div className="flex justify-between mt-4">
              <button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="btn btn-secondary"
              >
                Back
              </button>
             
              <button onClick={handleNext} className="btn btn-primary">
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NonLinearStepper;
