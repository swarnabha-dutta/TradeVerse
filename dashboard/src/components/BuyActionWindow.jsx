import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    
    const general = useContext(GeneralContext);

    const handleBuyClick = async () => {
        try {
            await axios.post("http://localhost:5000/api/orders", {
                name: uid,
                qty: Number(stockQuantity),
                price: Number(stockPrice),
                mode: "BUY",
            });

            general.closeBuyWindow(); 
        } catch (error) {
            console.log("Order failed:", error);
        }
    };
    const handleSellClick = async ()=>{
        try {
            await axios.post("http://localhost:5000/api/orders",{
                name:uid,
                qty:Number(stockQuantity),
                price:Number(stockPrice),
                mode:"SELL",
            });
            general.closeBuyWindow();
        } catch (error) {
            console.log("Sell order failed:", error);
        }
    }
    const handleCancelClick = () => {
        general.closeBuyWindow(); 
    };

      return (
        <div className="container" id="buy-window">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            min="1"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn btn-blue" onClick={handleBuyClick}>
                        Buy
                    </Link>

                    <Link className="btn btn-red" onClick={handleSellClick}>
                        Sell
                    </Link>

                    <Link className="btn btn-grey" onClick={general.closeBuyWindow}>
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BuyActionWindow;
