app.get("/getUsers", async function (req, res) {
//   try {
//     const users = await User.findAll();
//     res.send(users);
//   } catch (err) {
//     console.log("err", err);
//     res.status(500).send({ err: "fetch error" });
//   }
// });