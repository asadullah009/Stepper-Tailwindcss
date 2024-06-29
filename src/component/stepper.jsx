/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Stepper = ({
  steps,
  activeStep,
  onStepChange,
  type,
  totalSteps,
  iconMap = {},
  circleColor = {
    active: "bg-sky-600",
    complete: "bg-blue-600",
    default: "bg-slate-700",
  },
  lineColor = { active: "bg-blue-600", default: "bg-slate-200" },
  useGradient = false,
  containerClass,
  titleClass,
  contentClass,
  descriptionClass,
  footerClass,
  buttonClass,
  stepClass,
  separatorClass,
  totalStepsClass,
  headerClass,
  imageContainerClass,
  imageClass,
  activeDotClass,
  inactiveDotClass,
  buttonContainerClass,
  backButtonClass,
  backDisabledClass,
  stepIndicatorClass,
  stepDotClass,
  nextButtonClass,
  nextDisabledClass,
  progressClass,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getProgressWidth = () => {
    return `${(currentStep / totalSteps) * 100}%`;
  };

  if (type === "linear") {
    return (
      <>
        <div className="flex justify-between items-center ">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center w-52 ${
                activeStep === i + 1
                  ? "active"
                  : i + 1 < activeStep
                  ? "complete"
                  : ""
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${
                    activeStep === i + 1
                      ? circleColor.active || "bg-sky-600"
                      : i + 1 < activeStep
                      ? circleColor.complete || "bg-blue-600"
                      : circleColor.default || "bg-slate-700"
                  }`}
                >
                  {i + 1 <= activeStep ? <FaCheck /> : i + 1}
                </div>
                <div className="bg-white z-10  flex justify-start items-center gap-1 flex-col">
                  <p
                    className={` px-1 ${
                      i + 1 <= activeStep ? "font-bold" : ""
                    }`}
                  >
                    {step.label}
                  </p>
                  {step.optional && (
                    <p className=" z-10 px-1">{step.optional}</p>
                  )}
                </div>
              </div>
              {i !== steps.length - 1 && (
                <div
                  className={`absolute w-full h-[3px] top-1/2 transform -translate-y-1/2 ${
                    i + 1 < activeStep
                      ? lineColor.active || "bg-sky-600"
                      : lineColor.default || "bg-slate-200"
                  }`}
                  style={{
                    left: "calc(50% + 20px)",
                    right: "calc(-50% + 20px)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </>
    );
  } else if (type === "non-linear") {
    return (
      <>
        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center w-52 ${
                activeStep === i + 1
                  ? "active"
                  : i + 1 < activeStep
                  ? "complete"
                  : ""
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${
                    activeStep === i + 1
                      ? circleColor.active || "bg-sky-600"
                      : i + 1 < activeStep
                      ? circleColor.complete || "bg-blue-600"
                      : circleColor.default || "bg-slate-700"
                  }`}
                >
                  {i + 1 <= activeStep ? <FaCheck /> : i + 1}
                </div>

                <p
                  className={`px-1 bg-white z-10 text-sm ${
                    i + 1 <= activeStep ? "font-bold" : ""
                  }`}
                >
                  {step.label}
                </p>
              </div>
              {i !== steps.length - 1 && (
                <div
                  className={`absolute w-full h-[3px] top-1/2 transform -translate-y-1/2 ${
                    i + 1 < activeStep
                      ? lineColor.active || "bg-sky-600"
                      : lineColor.default || "bg-slate-200"
                  }`}
                  style={{
                    left: "calc(50% + 20px)",
                    right: "calc(-50% + 20px)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </>
    );
  } else if (type === "alternative") {
    return (
      <>
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-center items-center w-52 ${
                activeStep === i + 1
                  ? "active"
                  : i + 1 < activeStep && "complete"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${
                  activeStep === i + 1
                    ? circleColor.active || "bg-sky-600"
                    : i + 1 < activeStep
                    ? circleColor.complete || "bg-blue-600"
                    : circleColor.default || "bg-slate-700"
                }`}
              >
                {i + 1 < activeStep ? <FaCheck /> : i + 1}
              </div>

              <p
                className={`text-gray-500 py-2 ${
                  i + 1 < activeStep ? "text-white" : ""
                }`}
              >
                {step.label}
              </p>
              {i !== steps.length - 0 && i !== 0 && (
                <div
                  className={`content-['']  absolute w-full h-[3px] right-2/4 top-1/4 ${
                    i + 1 < activeStep
                      ? lineColor.active || "bg-sky-600"
                      : lineColor.default || "bg-slate-200"
                  } -translate-y-2/4`}
                />
              )}
            </div>
          ))}
        </div>
      </>
    );
  } else if (type === "error-step") {
    return (
      <>
        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center w-52 ${
                activeStep === i + 1
                  ? "active"
                  : i + 1 < activeStep
                  ? "complete"
                  : "incomplete"
              }`}
            >
              <div className="flex items-center">
                {step.error && activeStep === i + 1 ? (
                  <div className="flex flex-col items-center bg-black z-10 p-1 rounded">
                    <span className="text-red-600 mr-1">⚠</span>
                    <p className="text-red-600">{step.error}</p>
                  </div>
                ) : (
                  <>
                    <div
                      className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${
                        activeStep === i + 1
                          ? circleColor.active || "bg-sky-600"
                          : i + 1 < activeStep
                          ? circleColor.complete || "bg-blue-600"
                          : circleColor.default || "bg-slate-700"
                      }`}
                    >
                      {i + 1 <= activeStep ? <FaCheck /> : i + 1}
                    </div>
                    <div className="bg-white z-10 flex justify-start items-center gap-1 flex-col">
                      <p className="px-1">{step.label}</p>
                    </div>
                  </>
                )}
              </div>
              {i !== steps.length - 1 && (
                <div
                  className={`absolute w-full h-[3px] top-1/2 transform -translate-y-1/2 ${
                    i + 1 < activeStep
                      ? lineColor.active || "bg-sky-600"
                      : lineColor.default || "bg-slate-200"
                  }`}
                  style={{
                    left: "calc(50% + 20px)",
                    right: "calc(-50% + 20px)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </>
    );
  } else if (type === "customized-horizontal-stepper") {
    return (
      <>
        <div className="flex justify-between">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-center items-center w-52 ${
                activeStep === i + 1
                  ? "active"
                  : i + 1 < activeStep
                  ? "complete"
                  : "incomplete"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center z-10 relative rounded-full font-semibold text-white ${
                  activeStep === i + 1
                    ? circleColor.active || "bg-sky-600"
                    : i + 1 < activeStep
                    ? circleColor.complete || "bg-blue-600"
                    : circleColor.default || "bg-slate-700"
                }`}
                style={{
                  background:
                    useGradient && activeStep === i + 1
                      ? "linear-gradient(to right, #06b6d4, #3b82f6)"
                      : "",
                }}
              >
                {iconMap[i + 1] ? (
                  iconMap[i + 1]
                ) : i + 1 < activeStep ? (
                  <FaCheck />
                ) : (
                  ""
                )}
              </div>

              <p
                className={`text-gray-500 py-2 ${
                  i + 1 < activeStep ? "text-white" : ""
                }`}
              >
                {step.label}
              </p>
              {i !== steps.length - 0 && i !== 0 && (
                <div
                  className={`absolute w-full h-[3px] right-2/4 top-1/4 ${
                    i + 1 < activeStep
                      ? lineColor.active || "bg-sky-600"
                      : lineColor.default || "bg-slate-200"
                  } -translate-y-2/4`}
                />
              )}
            </div>
          ))}
        </div>
      </>
    );
  } else if (type === "vertical-stepper") {
    return (
      <>
        <ol className="overflow-hidden space-y-8">
          {steps.map((step, i) => (
            <li
              key={i}
              className={`relative flex-1 after:content-[''] after:w-0.5 after:h-full ${
                i < steps.length - 1 ? "after:bg-indigo-600" : ""
              } after:inline-block after:absolute after:-bottom-11 after:left-4 lg:after:left-5 ${
                activeStep > i + 1 ? "after:bg-indigo-600" : "after:bg-gray-200"
              }`}
            >
              <a className="flex items-start font-medium w-full">
                <span
                  className={`w-8 h-8 aspect-square ${
                    activeStep > i + 1
                      ? circleColor.complete
                      : activeStep === i + 1
                      ? circleColor.active
                      : circleColor.default
                  } border-2 border-transparent rounded-full flex justify-center items-center mr-3 text-sm lg:w-10 lg:h-10`}
                  style={{
                    background:
                      useGradient && activeStep === i + 1
                        ? "linear-gradient(to right, #06b6d4, #3b82f6)"
                        : "",
                  }}
                >
                  {iconMap[i + 1] ? (
                    <span
                      className={
                        activeStep > i + 1 ? "text-white" : "text-indigo-600"
                      }
                    >
                      {iconMap[i + 1]}
                    </span>
                  ) : (
                    <span
                      className={
                        activeStep > i + 1 ? "text-white" : "text-indigo-600"
                      }
                    >
                      {i + 1}
                    </span>
                  )}
                </span>
                <div className="block">
                  <h4
                    className={`text-base ${
                      activeStep === i + 1 ? "text-indigo-600" : "text-gray-900"
                    } mb-2`}
                  >
                    {step.label}
                  </h4>
                  {activeStep === i + 1 && (
                    <div className="transition-opacity duration-500 opacity-100">
                      <p className="text-sm text-gray-600 max-w-xs mb-4">
                        {step.description}
                      </p>
                      {step.details && (
                        <ul className="flex flex-wrap gap-x-5 gap-y-1 w-full max-w-xl mb-4">
                          {step.details.map((detail, index) => (
                            <li
                              key={index}
                              className="text-sm font-medium text-gray-900"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center gap-4 my-6">
                        {activeStep < steps.length && (
                          <button
                            className="py-2.5 px-6 text-sm bg-indigo-500 text-white rounded-lg cursor-pointer font-semibold text-center shadow-xs uppercase transition-all duration-500 hover:bg-indigo-700"
                            onClick={() => onStepChange(activeStep + 1)}
                          >
                            Continue
                          </button>
                        )}
                        {activeStep > 1 && (
                          <button
                            className="py-2.5 px-6 text-sm bg-indigo-50 text-indigo-500 rounded-lg cursor-pointer font-semibold text-center shadow-xs transition-all duration-500"
                            onClick={() => onStepChange(activeStep - 1)}
                          >
                            Back
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ol>
      </>
    );
  } else if (type === "text") {
    if (activeStep === 0) return null;

    const currentStep = steps[activeStep - 1];

    return (
      <div
        className={`w-full max-w-md mx-auto bg-indigo-100 p-2 rounded-md ${containerClass}`}
      >
        <h3
          className={`p-3 rounded bg-white text-gray-900 font-semibold text-xl ${titleClass}`}
        >
          {currentStep.label}
        </h3>
        <div className={`py-5 min-h-96 max-w-sm mx-auto ${contentClass}`}>
          <p
            className={`text-base text-gray-600 font-normal ${descriptionClass}`}
          >
            {currentStep.description}
          </p>
        </div>
        <div
          className={`flex items-center justify-between gap-3 p-3 bg-white rounded ${footerClass}`}
        >
          <button
            className={`flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600 ${buttonClass}`}
            onClick={() => activeStep > 1 && onStepChange(activeStep - 1)}
          >
            <FaChevronLeft />
            Back
          </button>
          <ul className="flex gap-1 items-center">
            <li className={`text-lg font-medium text-gray-900 ${stepClass}`}>
              {activeStep}
            </li>
            <li
              className={`text-base font-normal text-gray-900 ${separatorClass}`}
            >
              /
            </li>
            <li
              className={`text-base font-normal text-gray-600 ${totalStepsClass}`}
            >
              {steps.length}
            </li>
          </ul>
          <button
            className={`flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600 ${buttonClass}`}
            onClick={() =>
              activeStep < steps.length && onStepChange(activeStep + 1)
            }
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  } else if (type === "text-with-carousel-effect") {
    const currentStep = steps[activeStep - 1];

    return (
      <div
        className={`w-full max-w-2xl mx-auto  p-6 rounded-lg ${containerClass}`}
      >
        <div>
          <h3
            className={`p-4 rounded bg-gray-100 text-black font-bold text-2xl ${headerClass}`}
          >
            {currentStep.caption}
          </h3>
          <div
            className={`py-6 min-h-[500px] w-full mx-auto relative ${imageContainerClass}`}
          >
            {steps.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === activeStep - 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover rounded-md ${imageClass}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg ${footerClass}`}
        >
          <button
            className={`flex items-center gap-2 border-none text-lg font-semibold py-3 text-gray-800 transition-all duration-300 hover:text-indigo-700{buttonClass}`}
            onClick={() => activeStep > 1 && onStepChange(activeStep - 1)}
          >
            <FaChevronLeft />
            Back
          </button>
          <ul className="flex gap-1 items-center">
            {steps.map((_, index) => (
              <span
                key={index}
                className={
                  index === activeStep - 1
                    ? `block w-4 h-4 rounded-full bg-green-600 ${activeDotClass}`
                    : `block w-4 h-4 rounded-full bg-gray-300 ${inactiveDotClass}`
                }
              />
            ))}
          </ul>
          <button
            className={`flex items-center gap-2 border-none text-lg font-semibold py-3 text-gray-800 transition-all duration-300 hover:text-indigo-700 ${buttonClass}`}
            onClick={() =>
              activeStep < steps.length && onStepChange(activeStep + 1)
            }
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  } else if (type === "dots") {
    return (
      <div
        className={`w-full max-w-lg mx-auto bg-indigo-100 p-4 rounded-md ${containerClass}`}
      >
        <div
          className={`flex items-center justify-between gap-3 p-3 bg-white rounded ${buttonContainerClass}`}
        >
          <button
            className={`${backButtonClass} flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600${
              activeStep === 1
                ? `${backDisabledClass} opacity-50 cursor-not-allowed`
                : ""
            }`}
            onClick={() => activeStep > 1 && onStepChange(activeStep - 1)}
            disabled={activeStep === 1}
          >
            <FaChevronLeft />
            Back
          </button>
          <ul className={`${stepIndicatorClass} flex gap-1 items-center`}>
            {steps.map((_, index) => (
              <span
                key={index}
                className={`${stepDotClass} block w-3 h-3 rounded-full ${
                  index + 1 === activeStep
                    ? `bg-blue-600 ${activeDotClass}`
                    : `bg-blue-400 ${inactiveDotClass}`
                }`}
              />
            ))}
          </ul>
          <button
            className={`${nextButtonClass} flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600 ${
              activeStep === steps.length
                ? `opacity-50 cursor-not-allowed ${nextDisabledClass}`
                : ""
            }`}
            onClick={() =>
              activeStep < steps.length && onStepChange(activeStep + 1)
            }
            disabled={activeStep === steps.length}
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  } else if (type === "progress") {
    return (
      <div
        className={`w-full max-w-md mx-auto bg-indigo-100 border-2 border-indigo-600 rounded-md ${containerClass}`}
      >
        <div
          className={`flex items-center justify-between gap-3 p-3 bg-white rounded ${buttonContainerClass}`}
        >
          <button
            className={`flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-700 ease-in-out hover:text-indigo-600 ${backButtonClass}`}
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <FaChevronLeft />
            Back
          </button>
          <div className={`w-full max-w-xs bg-gray-100 rounded-3xl h-2 ${stepIndicatorClass}`}>
            <div
              className={`bg-indigo-600 h-2 rounded-3xl ${progressClass}`}
              style={{ width: getProgressWidth() }}
            ></div>
          </div>
          <button
            className={`flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600 ${nextButtonClass}`}
            onClick={handleNext}
            disabled={currentStep === totalSteps}
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      </div>
    );
  }
};

export default Stepper;
