// eslint-disable-next-line react/prop-types
const StepLabel = ({ label, error, optionalMessage, isActive, isCompleted }) => {
  return (
    <>
      {error && (isActive || isCompleted) ? (
        <div className="flex flex-col items-center bg-black z-10 p-1 rounded">
          <span className="text-red-600 mr-1">⚠</span>
          <p className="text-red-600">{optionalMessage}</p>
        </div>
      ) : (
        <div className="flex justify-start items-center flex-col">
          <span>{label}</span>
        </div>
      )}
    </>
  );
};

export default StepLabel;
