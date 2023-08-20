import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Payment from "./components/steps/Payment";
import Final from "./components/steps/Final";
import { PhotoId } from "./components/steps/PhotoId";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Identity Upload",
    "Personal Details",
    "Payment",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PhotoId />;
      case 2:
        return <Details />;
      case 3:
        return <PhotoId />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-9/12">
      <div className="w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-500 mt-6 rounded-t-2xl p-6 text-white font-bold"> New Patient Request Form </div>
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
