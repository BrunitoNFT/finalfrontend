import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { themeContext } from "../context/theme";
import { GiHealthNormal } from "react-icons/gi";

import { HiOutlineDocumentText } from "react-icons/hi";

import { favoriteContext } from "../context/favorites";

import { AiFillHeart } from "react-icons/ai";

import ToggleTheme from "./ToggleTheme";

const Header: React.FC = () => {
  const { state, dispatch } = useContext(themeContext);

  const { state: favoriteState } = useContext(favoriteContext);

  console.log("Context en header: ", state);

  return (
    <header className="w-full h-16 bg-blue-300 text-white font-bold text-2xl flex justify-around items-center dark:bg-blue-800 transition-all duration-500 relative">
      <div></div>
      <NavLink
        to="/dentists"
        className={({ isActive }) =>
          "" + (isActive ? "scale-110 border-b-2" : "")
        }
      >
        <div className="flex justify-center items-center">
          <p className="mr-2  max-sm:hidden">Dentists</p>
          <GiHealthNormal />
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          "" + (isActive ? "scale-110 border-b-2" : "")
        }
      >
        <div className="flex justify-center items-center">
          <p className="mr-2 max-sm:hidden">Contact</p>
          <HiOutlineDocumentText />
        </div>
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          "relative" + (isActive ? "scale-110 border-b-2" : "")
        }
      >
        <div className="w-full h-full relative flex justify-center items-center ">
          <div className="flex justify-center items-center">
            <p className="mr-2 max-sm:hidden">Favorites</p>
            <AiFillHeart />
          </div>

          <div
            className={
              "absolute top-0 right-0 translate-x-4 -translate-y- bg-white text-black rounded-xl w-4 h-4 text-xs flex justify-center items-center font-bold " +
              (favoriteState.favorites.length == 0 && "hidden")
            }
          >
            {favoriteState.favorites.length}
          </div>
        </div>
      </NavLink>
      <ToggleTheme />
    </header>
  );
};

export default Header;
