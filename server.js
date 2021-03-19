const http = require('http');
const express = require("express");
const app = express(); // create express app
const path = require("path");
app.use(require('./routes/users.js'));


app.use(express.static(path.join(__dirname, '/client/build')));

http.createServer(function (request, response) {
   target = process.env.TARGET ? process.env.TARGET : 'World' ;
   msg = process.env.MSG ? process.env.MSG : 'Hello ' + target + '\n';
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end(msg);
}).listen(8080);

console.log('Server running at http://0.0.0.0:8080/');
