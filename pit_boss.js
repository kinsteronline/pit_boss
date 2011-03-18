/* The Pit Boss */

require.paths.unshift(__dirname + '/static/js');

var http = require('http'),
  _ = require('./lib/underscore-min')['_'],
  html = require('./html.js'),
  url = require('url');

http.createServer(function(request, response) {
  var content = html.html(url.parse(request.url));
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': content.length
  });
  response.end(content);
}).listen(8124, '127.0.0.1', function() {
  console.log('PitBoss started on 127.0.0.1:8124 with pid ' + process.pid);
});

process.addListener('SIGINT', function() {
  console.log('\nPitBoss exiting.....');
  process.exit(0);
});

process.on('exit', function() {
  console.log('PitBoss exited');
});
