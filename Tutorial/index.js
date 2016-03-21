var http = require('http')

var server = http.createServer(function(request, response){
  console.log("You get a request");
  response.writeHead(200, { 'Content-Type':'text/plain'});
  response.end("Hello Himanshu! \n");
});

server.listen(8081);
