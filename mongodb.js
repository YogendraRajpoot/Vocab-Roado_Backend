const mongoose = require(`mongoose`);
require('dotenv').config()
class mongo {
  constructor() {
    this.createMongoConnection();
  }
  createMongoConnection() {
    mongoose.connect(process.env.Vocab_url);
    mongoose.connection.once(`open`, () => {
      console.log(`MongoDB is connected`);
    });
    mongoose.connection.on(`error`, () => {
      console.log(`Error occured in mongoDB connection`);
    });
  }
}
module.exports = mongo;
