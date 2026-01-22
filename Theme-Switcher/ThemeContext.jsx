import { useState,useContext,createContext, use } from "react";

const ThemeContext= createContext()

const ThemeProvider=({children}) =>{
    const [theme,setTheme]=useState("light")

    const toggleTheme=()=>{
        setTheme(prev => (prev === "light" ? "dark" : "light"))

    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}


// custom hook

const useTheme =()=> useContext(ThemeContext)

export {ThemeProvider,useTheme};
