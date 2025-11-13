import HoldingModel from "../models/Holdings.models.js";

const seedHoldings = async () => {
  const count = await HoldingModel.countDocuments();
  if (count > 0) return; // already inserted

  const tempHoldings = [
    { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
    { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
    { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
    { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" }
  ];

  await HoldingModel.insertMany(tempHoldings);
  console.log("🌱 Holdings seeded.");
};

export default seedHoldings;
