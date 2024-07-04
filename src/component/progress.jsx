import  { useState } from 'react';

const steps = [
  {
    label: 'Step 1',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Step 2',
    image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Step 3',
    image: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const Progress = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      

      {/* Navigation buttons */}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={handleBack}
          disabled={activeStep === 0}
          className={`px-4 py-2 rounded-lg text-white ${activeStep === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          Back
        </button>

        {/* Progress bar */}
        <div className="flex-1 mx-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full rounded-full bg-blue-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
          className={`px-4 py-2 rounded-lg text-white ${activeStep === steps.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {activeStep === steps.length - 1 ? 'Complete' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Progress;
