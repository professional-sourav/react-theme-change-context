import React, { createContext, useState } from "react";

const CustomContext = createContext();

const AppContext = ({ children }) => {
  const [theme, setTheme] = useState(0);

  const toggleTheme = (themeid) => {
    // console.log("Toggle Theme", themeid);
    setTheme(themeid);
  };

  return (
    <CustomContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CustomContext.Provider>
  );
};

export { AppContext, CustomContext };
