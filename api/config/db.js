require("dotenv").config({ path: "ENV_FILENAME" });
const mongoose = require("mongoose");
const { db } = require("./config.js");
require("dotenv").config();

let port = process.env.PORT;

console.log(JSON.stringify(process.env.PORT));
module.exports.connectDB = () => {
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: "true" });
  return mongoose.connection;
};
