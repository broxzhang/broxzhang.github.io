
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [nightMode, setNightMode] = useState(false);
    const [lang, setLang] = useState("en");
    
    return (
        <ThemeContext.Provider value={{ nightMode, setNightMode, lang, setLang }}>
        {children}
        </ThemeContext.Provider>
    );
};