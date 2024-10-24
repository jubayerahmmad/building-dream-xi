import { useState } from "react";
import Navbar from "./components/Navbar";
import ToggleButtons from "./components/ToggleButtons";

function App() {
  const [isActive, setIsActive] = useState(true);
  const handleToggle = () => {
    if (isActive) {
      setIsActive(!true);
    } else setIsActive(!false);
  };
  return (
    <>
      <Navbar></Navbar>
      <ToggleButtons
        isActive={isActive}
        handleToggle={handleToggle}
      ></ToggleButtons>
    </>
  );
}

export default App;
