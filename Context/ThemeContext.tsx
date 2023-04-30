import React, { createContext, useContext, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const Context = createContext<string | boolean | any>(null);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr: string) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Context.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useThemeContext = () => useContext(Context);
