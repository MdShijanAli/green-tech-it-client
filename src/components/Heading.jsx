
const Heading = ({children}) => {
  return (
    <div>
      <h2 className="md:text-h1 sm:text-h2 text-xl text-center font-semibold">{children}</h2>
    </div>
  );
};

export default Heading;