import React from 'react';

// eslint-disable-next-line react/prop-types
const StepButton = ({ onClick, disabled, children }) => {
  return (
    <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded ${disabled ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
  >
    {children}
  </button>
  );
};

export default StepButton;
