require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const port= process.env.PORT || 3002;

app.listen(PORT, (req, res) => {
    console.log(`app is listening on https://localhost:${port}`);
})