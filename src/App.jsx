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
      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">
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
      /> */}

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">
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
      /> */}

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">
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
      </h1> */}

      {/* <Stepper
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
      /> */}

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">
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
      /> */}

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">
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
      /> */}

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">text</h1> */}
      {/* <Stepper
        type="text"
        steps={textSteps}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        // you can also set the color of the steps and line here if not then default will be used and use ! important in the css for custom class

        containerClass=""
        titleClass=""
        contentClass=""
        descriptionClass=""
        footerClass=""
        buttonClass=""
        stepClass=""
        separatorClass=""
        totalStepsClass=""
      /> */}

      <h1 className="capitalize text-2xl text-left py-4 font-bold">
        Text with carousel effect
      </h1>
      <Stepper
        type="text-with-carousel-effect"
        steps={imagesStep}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        // you can also set the color of the steps and line here if not then default will be used and use ! important in the css for custom class

        containerClass=""
        headerClass=""
        imageContainerClass=""
        imageClass=""
        footerClass=""
        buttonClass=""
        activeDotClass=""
        inactiveDotClass=""
      />

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">Dots</h1>
      <Stepper
        type="dots"
        steps={imagesStep}
        activeStep={activeStep}
        onStepChange={setActiveStep}
        
        // you can also set the color of the steps and line here if not then default will be used and use ! important in the css for custom class
        containerClass="!bg-blue-500"
        buttonContainerClass=""
        backButtonClass=""
        backDisabledClass=""
        stepIndicatorClass=""
        stepDotClass=""
        activeDotClass=""
        inactiveDotClass=""
        nextButtonClass=""
        nextDisabledClass=""
      /> */}

      {/* <h1 className="capitalize text-2xl text-left py-4 font-bold">Progress</h1>
      <Stepper
        type="progress"
        totalSteps={10}
                // you can also set the color of the steps and line here if not then default will be used and use ! important in the css for custom class

        containerClass=""
        buttonContainerClass=""
        backButtonClass=""
        stepIndicatorClass=""
        progressClass="!bg-blue-900"
        nextButtonClass=""
      /> */}
    </div>
  );
};

export default StepperExample;
