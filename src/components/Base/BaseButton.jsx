const BaseButton = ({ children, onClick, cName = "" }) => {
  return (
    <button
      className={` font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity- ${cName}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BaseButton;
