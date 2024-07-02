
// eslint-disable-next-line react/prop-types
const Step = ({isActive,isCompleted,index,error,children,alternativeLabel = false,
}) => {
  const isHorizontal = alternativeLabel === true;

  return (
    <div
      className={`flex ${isHorizontal ? "flex-col" : "flex-row"} items-center`}
    >
      {error && isActive  ? ( 
        <div
            className={`text-sm ${
              isActive || isCompleted ? "text-blue-500" : "text-gray-500" 
            } ml-2`}
          >
            {children} 
          </div>      ) : (
        <>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              isCompleted
                ? "bg-blue-500" 
                : isActive
                ? "bg-blue-300" 
                : "bg-gray-300" 
            }`}
          >
            {isCompleted ? "✓" : index + 1}{" "}
          </div>
          <div
            className={`text-sm ${
              isActive || isCompleted ? "text-blue-500" : "text-gray-500" 
            } ml-2`}
          >
            {children} 
          </div>
        </>
      )}
    </div>
  );
};

export default Step;
