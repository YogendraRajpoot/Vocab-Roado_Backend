const dotenv = require("dotenv");
const express = require("express");
const app = express();
const vocabWord = require("./Models/vocab");
const bodyParser = require("body-parser");
const cors = require("cors");

// const data=require("./data.json")
dotenv.config();

app.use(bodyParser.json([]));

app.use(cors());

app.get("/", (req, res) => {
  // console.log(data);
  res.send("Welcome to Swiggy-Clone Backend Server! endpoint : /api/ :D");
});

app.post("/vocab", async (req, res, next) => {
  try {
    // console.log("17",req.body);
    let worddetails = req.body;
    let response = await vocabWord.insertMany([worddetails]);
    // console.log("19",response);
    res.json(response);
  } catch (error) {
    // console.log("22");
    res.json(response);
  }
});

app.get("/vocab", async (req, res) => {
  try {
    let response = await vocabWord.find({});
    // console.log(response);
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = app;
