
const express = require('express'),
  server = express();

module.exports = server;

server.use(express.static(process.cwd() + '/client'));

server.get('/version', function(req,res) {
  res.end("Version: 0.0.6 (Easy-Six)");
});

server.get('*', function(req,res) {
  res.end('you just rolled craps! so sorry');
});


