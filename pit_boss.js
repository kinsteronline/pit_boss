/* The Pit Boss */

require.paths.unshift(__dirname + '/lib');

var http = require('http'),
  _ = require('underscore-min')['_'];


http.createServer(function(request, response) {
  var title = '<title>Serving Craps since 2011</title>';
  var body;
  if (request.url === '/tables') {
    body = "<h1>Tables</h1>";
  } else {
    body = "<h1>Possible Actions</h1>";
    body += "<ul><li><a href='/tables'>List Tables</a></li></ul>";
  };
  var html = '<html><head>' + title + '</head><body>' + body + '</body>';
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': html.length
  });
  response.end(html);
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
