/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="max-w-[1140px] mx-auto xl:px-0 md:px-10 px-5">
      {children}
    </div>
  );
};

export default Container;
