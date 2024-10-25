import PropTypes from "prop-types";
import Players from "./Players";
import Selected from "./Selected";

const ToggleButtons = ({
  handleToggle,
  isActive,
  coins,
  availablePlayers,
  selectedPlayers,
  totalSelected,
  choosePlayer,
  deletePlayer,
  addMore,
}) => {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center my-4 p-4 lg:p-0">
        <div>
          <h1 className="text-lg lg:text-2xl font-bold">
            {isActive.active
              ? "Available Players"
              : `Selected Players ${totalSelected}/6`}
          </h1>
        </div>
        <div className="inline-flex  border-2 rounded-lg">
          <button
            onClick={() => handleToggle(true)}
            className={
              isActive.active
                ? "px-2 lg:px-4 py-1 lg:py-2 bg-[#E7FE29] font-bold "
                : "px-2 lg:px-4 py-1 lg:py-2 bg-slate-100 "
            }
          >
            Available
          </button>
          <button
            onClick={() => handleToggle(false)}
            className={
              isActive.active
                ? "px-2 lg:px-4 py-1 lg:py-2 border-l bg-slate-100"
                : "px-2 lg:px-4 py-1 lg:py-2 border-l bg-[#E7FE29] font-bold"
            }
          >
            Selected({totalSelected})
          </button>
        </div>
      </div>

      {isActive.active ? (
        <Players
          availablePlayers={availablePlayers}
          coins={coins}
          choosePlayer={choosePlayer}
        ></Players>
      ) : (
        <Selected
          availablePlayers={availablePlayers}
          selectedPlayers={selectedPlayers}
          totalSelected={totalSelected}
          deletePlayer={deletePlayer}
          addMore={addMore}
        ></Selected>
      )}
    </>
  );
};

ToggleButtons.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  choosePlayer: PropTypes.func.isRequired,
  addMore: PropTypes.func.isRequired,
  availablePlayers: PropTypes.array.isRequired,
  selectedPlayers: PropTypes.array.isRequired,
  deletePlayer: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  coins: PropTypes.number.isRequired,
  totalSelected: PropTypes.number.isRequired,
};

export default ToggleButtons;
