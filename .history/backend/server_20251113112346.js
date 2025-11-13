require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();



app.listen(3002, (req, res) => {
    console.log(`app is listening on port 3002`);
})