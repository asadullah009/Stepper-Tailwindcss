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

const Textwithcarouseleffect = () => {
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
      
      {/* Step image */}
      <div className="p-4">
        <img src={steps[activeStep].image} alt={steps[activeStep].label} className="w-full h-auto" />
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
        <div className="flex items-center">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 ${index === activeStep ? 'bg-blue-500' : 'bg-gray-400'} mx-1 rounded-full`}
            />
          ))}
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

export default Textwithcarouseleffect;
