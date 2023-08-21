import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <nav className={isDarkTheme ? "dark-theme nav-dark" : "nav"}>
      <div className="nav-center">
        <div>
          <h3>Where in the world?</h3>
        </div>
        <div className="container">
          <button className="dark-toggle" onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <BsFillSunFill className="toggle-icon" />
            ) : (
              <BsFillMoonFill className="toggle-ion" />
            )}
          </button>
          <p>dark mode</p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
