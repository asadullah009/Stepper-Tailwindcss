/* eslint-disable react/prop-types */

const StepConnector = ({ isActive, isCompleted, orientation }) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={`flex-1 ${isHorizontal ? 'border-t' : 'border-l'} ${isCompleted ? 'border-blue-500' : isActive ? 'border-blue-300' : 'border-gray-300'}`}></div>
  );
};

export default StepConnector;
