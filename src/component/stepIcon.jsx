
// eslint-disable-next-line react/prop-types
const StepIcon = ({ icon,isActive }) => {
  return <div className={`w-6 h-6 flex items-center justify-center rounded-full ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-400 text-black'}`}>
  {icon}
</div>
};

export default StepIcon;
