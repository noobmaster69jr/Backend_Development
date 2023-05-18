const express = require("express");
const { sequelize, User } = require("./models");

const app = express();
app.use(express.json());

app.post("/createUser", async function (req, res) {
  const {name, role, email} = req.body;
  console.log(req.body)
  try {
    const users = await User.create({name, role, email});
    res.send(users);
  } catch (err) {
    console.log(err, " error");
    res.status(500).send({ err: "data creation failed" });
  }
});

app.get("/getUsers", async function (req, res) {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    console.log("err", err);
    res.status(500).send({ err: "fetch error" });
  }
});




app.listen(8080, async function () {
  console.log("function started running");
  await sequelize.authenticate();
});
