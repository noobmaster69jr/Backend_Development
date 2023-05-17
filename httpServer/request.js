const http = require("http");
const PORT = 8080;

function listener(req, resp) {
  if (req.url == "/") {
    resp.end("i'm main page");
  } else if (req.url == "/about") {
    resp.end("i'm about page");
  } else {
    resp.end("check your routes");
  }
}

const server = http.createServer(listener);

server.listen(PORT, function () {
  console.log("sever successfully started at Port", PORT);
});
