import React, { useContext } from "react";
import { CustomContext } from "../appContext";

const ThemeArea = () => {
  const appContext = useContext(CustomContext);

  return (
    <>
      <div className={appContext.theme ? "themeLight" : "themeDark"}>
        Theme selected {appContext.theme ? "themeLight" : "themeDark"}
      </div>
    </>
  );
};

export default ThemeArea;
