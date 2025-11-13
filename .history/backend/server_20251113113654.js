require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const port= process.env.PORT || 3002;
const DATABASE_URL=process.env.MONGODB_URL;

console.log("DATABASE_URL",DATABASE_UR)

app.listen(port, (req, res) => {
    console.log(`app is listening on https://localhost:${port}`);
});