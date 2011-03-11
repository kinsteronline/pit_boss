/* The Pit Boss */

require.paths.unshift(__dirname + '/lib');

var http = require('http'),
  _ = require('underscore-min')['_'];


var html = function(url) {
  return '<html>' + head() + body(url) + '</html>';
};


var head = function() {
  return '<head>' + title() + '</head>';
};


var title = function() {
  return '<title>Serving Craps since 2011</title>';
};


var body = function(url) {
  return '<body>' + body_content_method(url)() + '</body>';
};


var body_content_method = function(url) {
  return url === '/tables' ? tables_body : index_body;
};


var tables_body = function() {
  return '<h1>Tables</h1>';
};


var index_body = function() {
  results = '<h1>Possible Actions</h1>';
  results += '<ul><li><a href="/tables">List Tables</a></li></ul>';
  return results;
};


http.createServer(function(request, response) {
  var content = html(request.url);
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
