// http también es un módulo incluido en node.js
const http = require('http');

http.createServer(function (req, res) {
  // server code
  res.end('hello world!');
}).listen(9000);
console.log('Server listening on port 9000');
