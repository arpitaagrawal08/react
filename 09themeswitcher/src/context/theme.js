import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    //variable bhi de skte hai, method bhi de skte hai

    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider
//custom hook bna rhe yha->directly ye import kr skte, dono import not needed
export default function useTheme(){
    return useContext(ThemeContext)
}