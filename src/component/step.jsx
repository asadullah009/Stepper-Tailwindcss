// eslint-disable-next-line react/prop-types
const Step = ({ isActive, isCompleted, index, error, children, alternativeLabel = false, icon, activeColor = "bg-blue-300", completedColor = "bg-blue-500", defaultColor = "bg-gray-300", activeTextColor = "text-blue-500", defaultTextColor = "text-gray-500",
}) => {
  const isHorizontal = alternativeLabel === true;

  return (
    <div className={`flex ${isHorizontal ? "flex-col" : "flex-row"} items-center`}>
      {error && (isActive || isCompleted) ? (
        <div className={`text-sm ${isActive || isCompleted ? activeTextColor : defaultTextColor} ml-2`}>
          {children}
        </div>
      ) : (
        <>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
            isCompleted ? completedColor : isActive ? activeColor : defaultColor
          }`}>
            {icon ? icon : (isCompleted ? "✓" : index + 1)}
          </div>
          <div className={`text-sm ${isActive || isCompleted ? activeTextColor : defaultTextColor} ml-2`}>
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Step;
