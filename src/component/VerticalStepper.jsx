import  { useState } from 'react';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const MobileStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Step label */}
      <div className="bg-gray-200 py-2 px-4">
        <p className="text-lg font-semibold">{steps[activeStep].label}</p>
      </div>
      
      {/* Step description */}
      <div className="p-4">
        <p className="text-gray-700">{steps[activeStep].description}</p>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between p-4">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={`px-4 py-2 rounded-lg text-white ${activeStep === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Back
        </button>

        {/* total like 5/10 indicator */}
        <div className="flex items-center">
          <p className="mr-2">{`${activeStep + 1}/${steps.length}`}</p>
        </div>
        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className={`px-4 py-2 rounded-lg text-white ${activeStep === steps.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MobileStepper;
