import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
const Players = ({ availablePlayers, choosePlayer }) => {
  return (
    <div className="container mx-auto p-4 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-96">
      {availablePlayers.map((player, index) => (
        <div key={index}>
          <div className="card bg-base-100 border-2">
            <figure className="p-4">
              <img
                src={player.image}
                alt="Shoes"
                className="h-64 w-full rounded-xl object-cover"
              />
            </figure>
            <div className="card-body">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user rounded-full"></i>
                <h2 className="card-title text-2xl">{player.name}</h2>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-flag"></i>
                  <p>{player.country}</p>
                </div>
                <div className="px-4 py-1 border-2 rounded-lg">
                  <p>{player.role}</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="space-y-2">
                <h1 className="text-xl font-semibold ">Rating</h1>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{player.rating}</p>
                  <p className="flex justify-end">{player.batting_style}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Price: $ {player.price}</p>
                  <button
                    onClick={() => choosePlayer(player.price, player)}
                    className="btn btn-sm btn-outline"
                  >
                    Choose Player
                  </button>
                  <ToastContainer autoClose={2000}></ToastContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Players.propTypes = {
  availablePlayers: PropTypes.array.isRequired,
  choosePlayer: PropTypes.func.isRequired,
};

export default Players;
