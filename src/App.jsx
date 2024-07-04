// import { useState } from "react";
// import { FaCheck, FaStar, FaUser } from "react-icons/fa";
import AlternativeLabel from "./component/AlternativeLabel";
import ErrorStep from "./component/ErrorStepper";
import LinearStepper from "./component/LinearStepper";
import NonLinearStepper from "./component/NonLinearStepper";
import Textwithcarouseleffect from "./component/Textwithcarouseleffect";
import MobileStepper from "./component/VerticalStepper";
import CustomStepper from "./component/customizedHorizontalStepper";
import Dots from "./component/dots";
import Progress from "./component/progress";

const StepperExample = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold py-2">LinearStepper</h1>
      <LinearStepper />;
      <h1 className="text-3xl font-bold py-2">NonLinearStepper</h1>
      <NonLinearStepper />;
      <h1 className="text-3xl font-bold py-2">AlternativeLabel</h1>
      <AlternativeLabel />;
      <h1 className="text-3xl font-bold py-2">ErrorStep</h1>
      <ErrorStep />
      <h1 className="text-3xl font-bold py-2">Customized horizontal stepper</h1>
      <CustomStepper />
      <h1 className="text-3xl font-bold py-2">Mobile Stepper</h1>
      <MobileStepper />
      <h1 className="text-3xl font-bold py-2">Text with carousel</h1>
      <Textwithcarouseleffect />

      <h1 className="text-3xl font-bold py-2">Dots Stepper</h1>
      <Dots />
      
      <h1 className="text-3xl font-bold py-2">Progress</h1>
      <Progress />
    </main>
  );
};

export default StepperExample;
