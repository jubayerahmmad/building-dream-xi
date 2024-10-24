import PropTypes from "prop-types";
import Players from "./Players";
import Selected from "./Selected";
const ToggleButtons = ({ handleToggle, isActive }) => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center my-4 p-4 lg:p-0">
        <div>
          <h1 className="text-lg lg:text-2xl font-bold">
            {isActive ? "Available Players" : "Selected Players"}
          </h1>
        </div>
        <div className="inline-flex  border-2 rounded-lg">
          <button
            onClick={handleToggle}
            className={
              isActive
                ? "px-2 lg:px-4 py-1 lg:py-2 bg-[#E7FE29] font-bold "
                : "px-2 lg:px-4 py-1 lg:py-2 bg-slate-100 "
            }
          >
            Available
          </button>
          <button
            onClick={handleToggle}
            className={
              isActive
                ? "px-2 lg:px-4 py-1 lg:py-2 border-l bg-slate-100 "
                : "px-2 lg:px-4 py-1 lg:py-2 border-l bg-[#E7FE29] font-bold"
            }
          >
            Selected(0)
          </button>
        </div>
      </div>

      {isActive ? <Players></Players> : <Selected></Selected>}
    </>
  );
};

ToggleButtons.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ToggleButtons;
