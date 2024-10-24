import { useState } from "react";
import logo from "../assets/logo.png";
import Banner from "./Banner";
const Navbar = () => {
  const [coins, setCoins] = useState(0);

  const addCoins = () => {
    setCoins(coins + 1800000);
  };

  return (
    <>
      <div className="bg-transparent px-4 lg:px-0">
        <div className="navbar container mx-auto">
          <div className="flex-1">
            <div>
              <img className="" src={logo} alt="" />
            </div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-xl hidden lg:flex">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixtures</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
            <div className="border-2 rounded-xl">
              <p className="px-4 py-2 font-bold">
                <i className="fa-solid fa-coins text-yellow-400 mx-2"> </i>
                Coins: {coins}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Banner addCoins={addCoins}></Banner>
    </>
  );
};

export default Navbar;
