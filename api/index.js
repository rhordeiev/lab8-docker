require("dotenv").config({ path: "ENV_FILENAME" });
const express = require("express");
const app = express();
const cors = require("cors");
const { User } = require("./src/models/user.js");

app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const user = new User({ username: "Rostyslav" });
    await user.save();
    const users = await User.find();
    console.log("*************");
    res.json({ users });
  } catch (e) {
    res.send({ e });
  }
});

const { port, host } = require("./config/config");
const { connectDB } = require("./config/db.js");
connectDB()
  .on("error", console.error.bind(console, "connection error"))
  .once("open", Start);
function Start() {
  app.listen(port, () => {
    console.log(`Server is listening on ${port} port`);
    console.log(`Host is ${host} `);
  });
}
