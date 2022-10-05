import { createContext, useEffect, useState } from "react";


const DarkModeContext = createContext();


const ModeProvider = ({children}) => {
    const [darkMode,setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true')

    useEffect(()=>{
        localStorage.setItem('dark-mode', JSON.stringify(darkMode));
      },[darkMode])
    return (
        <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}


export {DarkModeContext,ModeProvider} ;