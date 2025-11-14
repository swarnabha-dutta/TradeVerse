import YahooFinance from "yahoo-finance2";  // default import

// create instance
const yahooFinance = new YahooFinance();

export const getYahooQuote = async (symbol) => {
  try {
    const result = await yahooFinance.quote(symbol);

    if (!result) {
      throw new Error("No stock data returned");
    }

    return {
      symbol: result.symbol,
      price: result.regularMarketPrice,
      change: result.regularMarketChange,
      changePercent: result.regularMarketChangePercent,
      high: result.regularMarketDayHigh,
      low: result.regularMarketDayLow,
      open: result.regularMarketOpen,
      previousClose: result.regularMarketPreviousClose,
    };
  } catch (err) {
    console.log("🔥 Yahoo Error:", err);
    throw new Error("Failed to fetch stock data");
  }
};
