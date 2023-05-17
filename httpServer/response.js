const httpServer = require("http");



function listener(request, response) {

    //ways to set response headers
    response.setHeader("Tharu", "code")
    response.writeHead(200,{
        "Content-type": "text/html",
        "Hello" : "Ashwin"
    })
  const body = "hi i'm up and running";
  response.end(body)
}

const server = httpServer.createServer(listener);

server.listen(8080, function () {
  console.log("Server has started");
});
