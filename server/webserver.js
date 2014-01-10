
const express = require('express'),
  webserver = express();

module.exports = webserver;

webserver.use(express.static(process.cwd() + '/client'));

webserver.get('/version', function(req,res) {
  res.end("Version: 0.0.6 (Easy-Six)");
});

webserver.get('*', function(req,res) {
  res.end('you just rolled craps! so sorry');
});



