import React, { useContext } from "react";
import Menu from "./Menu.jsx";
import GeneralContext from "./GeneralContext";

const TopBar = () => {
    const { theme, toggleTheme } = useContext(GeneralContext);

    return (
        <div className="topbar-container">

            <button 
                onClick={toggleTheme}
                style={{
                    marginLeft: "20px",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    background: "var(--card)",
                    color: "var(--text)",
                    border: "1px solid var(--border)"
                }}
            >
                {theme === "dark" ? "☀ Light" : "🌙 Dark"}
            </button>

            <div className="indices-container">
                <div className="nifty">
                <p className="index">NIFTY 50</p>
                <p className="index-points">{100.2} </p>
                </div>

                <div className="sensex">
                <p className="index">SENSEX</p>
                <p className="index-points">{100.2}</p>
                </div>
            </div>

            <Menu />
        </div>
    );
};

export default TopBar;
