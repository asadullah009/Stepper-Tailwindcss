// import { useState } from "react";
// import { FaCheck, FaStar, FaUser } from "react-icons/fa";
import AlternativeLabel from "./component/AlternativeLabel";
import ErrorStep from "./component/ErrorStepper";
import LinearStepper from "./component/LinearStepper";
import NonLinearStepper from "./component/NonLinearStepper";

const StepperExample = () => {
  // const iconMap = {
  //   1: <FaUser />,
  //   2: <FaStar />,
  //   3: <FaCheck />,
  // };

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
    </main>
  );
};

export default StepperExample;
