import { useState, useContext } from "react";
import "./style.css";
import { BsSun as SunIcon } from "react-icons/bs";
import { BsMoon as MoonIcon } from "react-icons/bs";

import { themeContext } from "../context/theme";

const ThemeToggle = () => {
  const { state, dispatch } = useContext(themeContext);

  const [isEnabled, setIsEnabled] = useState<boolean>(state.theme);

  return (
    <label className="toggle-wrapper " htmlFor="toggle">
      <div
        className={`toggle bg-gray-500 dark:bg-black hover:scale-95 transition-all duration-500 ${
          isEnabled ? "enabled" : "disabled"
        }`}
      >
        <span className="hidden">{isEnabled ? "Enable" : "Disable"}</span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onChange={() => {
            setIsEnabled((prevState) => !prevState);
            dispatch({ type: "toggle" });
          }}
        />
      </div>
    </label>
  );
};

export default ThemeToggle;
