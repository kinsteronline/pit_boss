/* The Pit Boss */

var http = require('http');


http.createServer(function(request, response) {
  var html = '<html><body>Serving Craps since 2011</body></html>';
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




