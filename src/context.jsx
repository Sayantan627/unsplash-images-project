import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

// checking user prefers dark mode using Vanilla Js
const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme");
  return storedDarkMode === null ? prefersDarkMode : storedDarkMode === "true";
};

export const AppProvider = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchValue, setSearchValue] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
