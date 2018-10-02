const http = require("http");
const PORT = 8000;

function requestHandler(request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.statusCode = 404;
    response.end("Unknow Path");
  }
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});