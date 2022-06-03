const dotenv = require("dotenv");
const express = require("express");
const app = express();
const vocabModal = require("./Models/vocab");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

dotenv.config();

app.use(bodyParser.json([]));

app.use(cors());

app.get("/", (req, res) => {
  console.log("hello");  
  res.send(`Welcome to Swiggy-Clone Backend Server! endpoint : /api/ :D`);
});

app.post("/vocab", async (req, res, next) => {
  try {
    // console.log("17",req.body);
    let worddetails = req.body;
    // console.log("25",worddetails);
    let response = await vocabModal.insertMany([worddetails]);
    // console.log("19",response);
    res.json(response);
  } catch (error) {
    // console.log("22");
    res.json(response);
  }
});
app.get("/vocab", async (req, res) => {
  try {
    let response = await vocabModal.find({});
    // console.log(response);
    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/:id", function (req, res) {
  let app_id = "id";
  let app_key = "key";
  let endpoint = "entries";
  let language_code = "en-gb";
  // let word = "example";
  const word = req.params.id;
  let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`;

  fetch(url, {
    method: "GET",
    mode: "no-cors",
    headers: { app_key: app_key, app_id: app_id },
  })
    .then((response) => response.json())
    .then((data) => res.send(data));
});

module.exports = app;
