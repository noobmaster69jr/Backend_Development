const express = require("express");

const app = express();

app.get("/", function (req, resp) {
    console.log(req.url)
  resp.status(200).send("I'm Main page in express");
});

app.get('/about', function(req, resp){
    console.log("about", req.url)
    resp.send("I'm about page in express")
})

app.listen(8080, function () {
  console.log("Successfully started express server");
});
