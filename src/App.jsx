import { useState } from "react";
import { FaCheck, FaStar, FaUser } from "react-icons/fa";
import Stepper from "./component/stepper";

const StepperExample = () => {
  const steps = [
    { label: "Step 1" },
    { label: "Step 2", optional: "optional" },
    { label: "Step 3", error: "Alert message" },
  ];

  const verticalSteps = [
    {
      label: "How to create a Pagedone account?",
      description: "To Create an account with several steps...",
      details: [
        "Register yourself",
        "Validation",
        "Email Verification",
        "Account Activation",
        "Profile Setup",
        "Confirmation Message.",
      ],
    },
    {
      label: "Have any trust issue?",
      description: "Of course we are here to guide you.",
    },
    {
      label: "How can I reset my password?",
      description: "Go to your profile, click Change Password...",
    },
    {
      label: "Have any trust issue?",
      description: "Of course we are here to guide you.",
    },
    {
      label: "How can I reset my password?",
      description: "Go to your profile, click Change Password...",
    },
  ];

  const textSteps = [
    {
      label: "How to create an account?",
      description:
        "Create an account with several steps to collect user information, verify identity, and set up account preferences. Register yourself > Validation > Email Verification > Account Activation > Profile Setup > Confirmation Message. By following these steps, you can create an easy and user-friendly account creation process.",
    },
    {
      label: "Validation",
      description:
        "Verify your email and personal information. Ensure all details are accurate and complete before proceeding to the next step.",
    },
    {
      label: "Email Verification",
      description:
        "Check your inbox for a verification email. Click the link to verify your email address and continue with the account setup.",
    },
    {
      label: "Account Activation",
      description:
        "Activate your account by setting a secure password and confirming your details.",
    },
    {
      label: "Profile Setup",
      description:
        "Complete your profile by adding a profile picture, bio, and other relevant information.",
    },
    {
      label: "Confirmation Message",
      description:
        "Congratulations! Your account has been successfully created. You can now log in and start using our service.",
    },
  ];

  const imagesStep = [
    {
      src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
      alt: "San Francisco – Oakland Bay Bridge, United States",
      caption: "1",
    },
    {
      src: "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250",
      alt: "San Francisco – Oakland Bay Bridge, United States",
      caption: "2",
    },
    {
      src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
      alt: "San Francisco – Oakland Bay Bridge, United States",
      caption: "3",
    },
    // Add more image objects as needed
  ];

  const iconMap = {
    1: <FaUser />,
    2: <FaStar />,
    3: <FaCheck />,
  };

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flex justify-center items-center w-full flex-col">
      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        {" "}
        linear stepper
      </h1>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        type="linear"
        // you can also set the color of the steps and line here if not then default will be used
        circleColor={{
          active: "bg-green-600",
          complete: "bg-orange-600",
          default: "bg-gray-700",
        }}
        lineColor={{
          active: "bg-indigo-600",
          default: "bg-gray-200",
        }}
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        {" "}
        linear stepper
      </h1>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        type="non-linear"
        // you can also set the color of the steps and line here if not then default will be used
        circleColor={{
          active: "bg-green-600",
          complete: "bg-orange-600",
          default: "bg-gray-700",
        }}
        lineColor={{
          active: "bg-indigo-600",
          default: "bg-gray-200",
        }}
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        Alternative label
      </h1>

      <Stepper
        steps={steps}
        activeStep={activeStep}
        type="alternative"
        // // you can also set the color of the steps and line here if not then default will be used
        // circleColor={{
        //   active: "bg-green-600",
        //   complete: "bg-orange-600",
        //   default: "bg-gray-700",
        // }}
        // lineColor={{
        //   active: "bg-indigo-600",
        //   default: "bg-gray-200",
        // }}
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        Error Stepper
      </h1>

      <Stepper
        steps={steps}
        activeStep={activeStep}
        type="error-step"
        // you can also set the color of the steps and line here if not then default will be used
        // circleColor={{
        //   active: "bg-green-600",
        //   complete: "bg-orange-600",
        //   default: "bg-gray-700",
        // }}
        // lineColor={{
        //   active: "bg-indigo-600",
        //   default: "bg-gray-200",
        // }}
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        Customized horizontal stepper
      </h1>

      <Stepper
        type="customized-horizontal-stepper"
        steps={steps}
        activeStep={activeStep}
        // you can also set the color of the steps and line here if not then default will be used and add gradient if useGradient is true & icons will be shown in the middle
        iconMap={iconMap}
        circleColor={{
          active: "bg-green-600",
          complete: "bg-orange-600",
          default: "bg-gray-700",
        }}
        lineColor={{
          active: "bg-green-600",
          default: "bg-gray-200",
        }}
        useGradient={true}
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        vertical-stepper
      </h1>

      <Stepper
        type="vertical-stepper"
        steps={verticalSteps}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        iconMap={iconMap}
        circleColor={{
          active: "bg-indigo-600",
          complete: "bg-indigo-600",
          default: "bg-gray-50",
        }}
        lineColor={{
          active: "bg-indigo-600",
          default: "bg-gray-200",
        }}
        useGradient={true}
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">text</h1>
      <Stepper
        type="text"
        steps={textSteps}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        // you can also set the color of the steps and line here

        containerClass="w-full max-w-md mx-auto bg-indigo-100 p-2 rounded-md"
        titleClass="p-3 rounded bg-white text-gray-900 font-semibold text-xl"
        contentClass="py-5 min-h-96 max-w-sm mx-auto"
        descriptionClass="text-base text-gray-600 font-normal"
        footerClass="flex items-center justify-between gap-3 p-3 bg-white rounded"
        buttonClass="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
        stepClass="text-lg font-medium text-gray-900"
        separatorClass="text-base font-normal text-gray-900"
        totalStepsClass="text-base font-normal text-gray-600"
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        Text with carousel effect
      </h1>
      <Stepper
        type="text-with-carousel-effect"
        steps={imagesStep}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        // you can also set the color of the steps and line here

        containerClass="w-full max-w-2xl mx-auto  p-6 rounded-lg"
        headerClass="p-4 rounded bg-gray-100 text-black font-bold text-2xl"
        imageContainerClass="py-6 min-h-[500px] w-full mx-auto relative"
        imageClass="w-full h-full object-cover rounded-md"
        footerClass="flex items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg"
        buttonClass="flex items-center gap-2 border-none text-lg font-semibold py-3 text-gray-800 transition-all duration-300 hover:text-indigo-700"
        activeDotClass="block w-4 h-4 rounded-full bg-green-600"
        inactiveDotClass="block w-4 h-4 rounded-full bg-gray-300"
      /> 

      <h1 className="capitalize text-2xl text-left py-4 font-bold">Dots</h1>
      <Stepper
        type="dots"
        steps={imagesStep}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        
        // you can also set the color of the steps and line here
        containerClass="w-full max-w-lg mx-auto bg-indigo-100 p-4 rounded-md"
        buttonContainerClass="flex items-center justify-between gap-3 p-3 bg-white rounded"
        backButtonClass="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
        backDisabledClass="opacity-50 cursor-not-allowed"
        stepIndicatorClass="flex gap-1 items-center"
        stepDotClass="block w-3 h-3 rounded-full"
        activeDotClass="bg-blue-600"
        inactiveDotClass="bg-gray-400"
        nextButtonClass="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
        nextDisabledClass="opacity-50 cursor-not-allowed"
      />

      <h1 className="capitalize text-2xl text-left py-4 font-bold">Progress</h1>
      <Stepper
        type="progress"
        totalSteps={10}
        containerClass="w-full max-w-md mx-auto bg-indigo-100 border-2 border-indigo-600 rounded-md"
        buttonContainerClass="flex items-center justify-between gap-3 p-3 bg-white rounded"
        backButtonClass="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-700 ease-in-out hover:text-indigo-600"
        stepIndicatorClass="w-full max-w-xs bg-gray-100 rounded-3xl h-2"
        progressClass="bg-indigo-600 h-2 rounded-3xl"
        nextButtonClass="flex items-center gap-1.5 border-none text-base font-medium py-2.5 text-gray-700 transition-all duration-300 hover:text-indigo-600"
      />
    </div>
  );
};

export default StepperExample;
