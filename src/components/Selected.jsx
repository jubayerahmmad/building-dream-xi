import PropTypes from "prop-types";
const Selected = ({ selectedPlayers, deletePlayer, addMore }) => {
  return (
    <div className="container mx-auto p-4 lg:p-0 mb-96">
      <div>
        {selectedPlayers.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-2 border-2 rounded-xl my-4"
          >
            <div className="flex items-center gap-4 p-4">
              <img
                className="rounded-xl h-20 w-20 object-cover"
                src={player.image}
                alt=""
              />
              <div className="space-y-1">
                <h1 className="text-2xl font-bold">{player.name}</h1>
                <p>Role: {player.role}</p>
                <p>Price: ${player.price}</p>
              </div>
            </div>
            <div>
              <button
                onClick={() => deletePlayer(player.name)}
                className="btn btn-outline text-error"
              >
                <i className="fa-solid fa-trash"></i>Delete
              </button>
            </div>
          </div>
        ))}
        <div>
          <button
            onClick={addMore}
            className="btn bg-[#E7FE29]  border-2 border-black rounded-xl text-xl font-bold"
          >
            Add Players
          </button>
        </div>
      </div>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.array,
  deletePlayer: PropTypes.func,
  addMore: PropTypes.func,
};
export default Selected;
