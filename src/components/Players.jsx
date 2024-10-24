import { useEffect, useState } from "react";

const Players = () => {
  const [availablePlayers, setAvailablePlayers] = useState([]);

  useEffect(() => {
    fetch("./playersData.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  return (
    <div className="container mx-auto p-4 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {availablePlayers.map((player, index) => (
        <div key={index}>
          <div className="card bg-base-100 border-2">
            <figure className="p-4">
              <img src={player.image} alt="Shoes" className="rounded-xl" />
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
                  <button className="btn btn-sm btn-outline">
                    Choose Player
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
