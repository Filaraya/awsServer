var http = require('http');

//create a server object:
// Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World this is my first aws message\n'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 3000

// Console will print the message
console.log('Server running')