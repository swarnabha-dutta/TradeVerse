import React, { useState, createContext, useEffect } from "react";
import BuyActionWindow from "./BuyActionWindow.jsx";

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
    // BUY WINDOW STATE
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    // THEME STATE (Dark/Light)
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    // Apply class on body
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,
                theme,
                toggleTheme,
            }}
        >
            {children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;
