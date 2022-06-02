const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Vocab schema

const vocabSchema = new Schema({
  id: { type: String, required: true },
  results: { type: Array, required: true },
});
module.exports = mongoose.model("Vocab", vocabSchema);
