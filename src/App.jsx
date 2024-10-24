import { useState } from "react";
import Navbar from "./components/Navbar";
import ToggleButtons from "./components/ToggleButtons";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

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
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;
