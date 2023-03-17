import React, { useContext } from "react";
import { CustomContext } from "../appContext";

const Theme = () => {
  const appContext = useContext(CustomContext);

  const handleThemeChange = (themeid) => {
    appContext.toggleTheme(parseInt(themeid));
  };

  return (
    <>
      <h1>Change Template</h1>
      <form>
        <select onChange={(event) => handleThemeChange(event.target.value)}>
          <option value="0">Dark Theme</option>
          <option value="1">Light Theme</option>
        </select>
      </form>
    </>
  );
};

export default Theme;
