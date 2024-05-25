import { useContext } from "react";
import { createContext } from "react";

export const themeContext = createContext(
    {
        themeMode: "light",
        lightTheme: () => { },
        darkTheme: () => { }
    }
);

export const ThemeContextProvider = themeContext.Provider;

 export  const useTheme = () => {
  return useContext(themeContext);
};

 