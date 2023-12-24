
const Button = ({ onClick, children }) => {
  return (
    <div>
          <button className="sm:px-10 px-8 py-2 sm:py-3 bg-primary hover:bg-secondary transition duration-500 ease-in-out text-white font-semibold rounded-sm" onClick={onClick}>
           {children}
          </button>
    </div>
  );
};

export default Button;