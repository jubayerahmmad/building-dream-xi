import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ToggleButtons from "./components/ToggleButtons";
import Footer from "./components/Footer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //useState managements
  const [coins, setCoins] = useState(0);

  const [isActive, setIsActive] = useState({
    active: true,
  });

  const [availablePlayers, setAvailablePlayers] = useState([]);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [totalSelected, setTotalSelected] = useState(0);

  const [email, setEmail] = useState("");

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
  const handleToggle = (active) => {
    if (active) {
      setIsActive({ active: true });
    } else setIsActive({ active: false });
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
        if (totalSelected > 5) {
          toast.error("Slot Full", {
            position: "top-center",
          });
        } else {
          const selected = [...selectedPlayers, player];
          setTotalSelected(totalSelected + 1);
          setCoins(coins - playerPrice);
          toast.success("Successfully Added", {
            position: "top-center",
          });
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
    toast.info("Player Removed", {
      position: "top-center",
    });
  };

  //add more button func
  const addMore = (active) => {
    if (active) {
      setIsActive({ active: true });
    } else setIsActive({ active: false });
  };

  // subscribe button
  const handleOnChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = () => {
    if (email.includes("@")) {
      localStorage.setItem("email", email);
    } else {
      toast.error("Enter Valid email", {
        position: "top-center",
      });
    }
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

      <Footer
        handleOnChange={handleOnChange}
        handleSubscribe={handleSubscribe}
      ></Footer>
    </>
  );
}

export default App;
