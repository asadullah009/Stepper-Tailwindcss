
// eslint-disable-next-line react/prop-types
const StepLabel = ({ label, isOptional, error, optionalMessage, isActive }) => {
  return (
    <>
      {error && isActive ? ( 
        <div className="flex flex-col items-center bg-black z-10 p-1 rounded">
          <span className="text-red-600 mr-1">⚠</span>
          <p className="text-red-600">{optionalMessage}</p>
        </div>
      ) : (
        <div className="flex justify-start items-center flex-col">
          <span>{label}</span>
          {isOptional && (
            <span className="text-xs text-gray-400">(Optional)</span>
          )}
        </div>
      )}
    </>
  );
};

export default StepLabel;
