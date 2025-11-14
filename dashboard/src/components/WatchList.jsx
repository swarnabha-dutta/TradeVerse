import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/Data";
import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [livePrices, setLivePrices] = useState({});

  // 🔥 Fetch Live Prices from Backend (Yahoo API)
  useEffect(() => {
    const fetchLivePrices = async () => {
      try {
        const results = await Promise.all(
          watchlist.map((item) =>
            axios.get(`http://localhost:5000/api/live/quote/${item.symbol}`)
          )
        );

        const temp = {};
        results.forEach((res, index) => {
          temp[watchlist[index].symbol] = res.data.price;
        });

        setLivePrices(temp);
      } catch (error) {
        console.log("Live Price Fetch Error: ", error);
      }
    };

    fetchLivePrices();

    const interval = setInterval(fetchLivePrices, 10000); // auto refresh 10 sec
    return () => clearInterval(interval);
  }, []);

  // Donut chart data (can be dynamic later)
  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map(
          (stock) => livePrices[stock.symbol] || stock.price
        ),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search eg: INFY, RELIANCE, TCS"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
            livePrice={livePrices[stock.symbol]}
          />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

// -------------------------------------------------------------------------------------

const WatchListItem = ({ stock, livePrice }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          {/* 🔥 LIVE PRICE SHOW HERE */}
          <span className="price">
            {livePrice ? livePrice.toFixed(2) : "Loading..."}
          </span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// -------------------------------------------------------------------------------------

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={() => generalContext.openBuyWindow(uid)}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
