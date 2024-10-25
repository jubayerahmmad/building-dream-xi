import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ToggleButtons from "./components/ToggleButtons";
import Footer from "./components/Footer";
import Players from "./components/Players";

function App() {
  const [isActive, setIsActive] = useState(true);
  const [coins, setCoins] = useState(0);

  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [totalSelected, setTotalSelected] = useState(0);

  useEffect(() => {
    fetch("./playersData.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);

  const addCoins = () => {
    setCoins(coins + 2500000);
  };

  const choosePlayer = (removedCoins, player) => {
    if (removedCoins > coins) {
      alert("Not Enough Coins");
    } else {
      setCoins(coins - removedCoins);
      if (totalSelected > 5) {
        alert("Enough");
      } else {
        const selected = [...selectedPlayers, player];
        setTotalSelected(totalSelected + 1);
        setSelectedPlayers(selected);
        console.log(selected);
      }
      // console.log(player);
    }
  };

  const addMorePlayer = (availablePlayers) => {
    console.log(availablePlayers);
  };

  const handleToggle = () => {
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
        addMorePlayer={addMorePlayer}
      ></ToggleButtons>

      <Footer></Footer>
    </>
  );
}

export default App;
