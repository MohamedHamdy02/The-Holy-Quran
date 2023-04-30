import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const Context = createContext<any>(null);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <Context.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useThemeContext = () => useContext(Context);
