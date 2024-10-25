import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ToggleButtons from "./components/ToggleButtons";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [coins, setCoins] = useState(0);

  const [isActive, setIsActive] = useState(true);

  const [availablePlayers, setAvailablePlayers] = useState([]);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [totalSelected, setTotalSelected] = useState(0);

  useEffect(() => {
    fetch("./playersData.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  //add coins functions
  const addCoins = () => {
    setCoins(coins + 2500000);
  };

  //toggle button func
  const handleToggle = () => {
    if (isActive) {
      setIsActive(!true);
    } else setIsActive(!false);
  };

  // choose player button func
  const choosePlayer = (playerPrice, player) => {
    const isExist = selectedPlayers.find((plr) => plr.name === player.name);
    if (!isExist) {
      if (playerPrice > coins) {
        toast.error("Not Enough Coins", {
          position: "top-center",
        });
      } else {
        setCoins(coins - playerPrice);
        if (totalSelected > 5) {
          toast.error("Slot FullFilled", {
            position: "top-center",
          });
        } else {
          const selected = [...selectedPlayers, player];
          setTotalSelected(totalSelected + 1);
          setSelectedPlayers(selected);
        }
      }
    } else {
      toast.error("Already Added", {
        position: "top-center",
      });
    }
  };

  // delete player button func
  const deletePlayer = (name, playerPrice) => {
    const remove = selectedPlayers.filter((player) => player.name !== name);
    setSelectedPlayers(remove);
    setTotalSelected(totalSelected - 1);
    setCoins(coins + playerPrice);
    toast.success("Deleted");
  };

  //add more button func
  const addMore = () => {
    if (isActive) {
      setIsActive(!true);
    } else setIsActive(!false);
  };

  return (
    <>
      <Navbar coins={coins} addCoins={addCoins}></Navbar>
      <ToggleButtons
        choosePlayer={choosePlayer}
        availablePlayers={availablePlayers}
        selectedPlayers={selectedPlayers}
        totalSelected={totalSelected}
        coins={coins}
        isActive={isActive}
        handleToggle={handleToggle}
        deletePlayer={deletePlayer}
        addMore={addMore}
        ToastContainer={ToastContainer}
      ></ToggleButtons>

      <Footer></Footer>
    </>
  );
}

export default App;
