/* eslint-disable react/prop-types */
import React from 'react';
import StepConnector from './stepConnector';

// eslint-disable-next-line react/prop-types
const Stepper = ({ children, currentStep, orientation = 'horizontal' }) => {
  const isHorizontal = orientation === 'horizontal';
  return (
    <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} items-center`}>
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {React.cloneElement(child, {
            isActive: index === currentStep,
            isCompleted: index < currentStep,
          })}
          {index < children.length - 1 && (
            <StepConnector
              isActive={index < currentStep}
              isCompleted={index < currentStep}
              orientation={orientation}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
