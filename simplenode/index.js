var http = require('http');

var server = http.createServer(function(request, response){
  console.log('got a request');
  response.write('hi');
  response.end();
})

server.listen(3002);

console.log("Server running on port http://127.0.0.1:3002");
