/* The Pit Boss */

require.paths.unshift(__dirname + '/static/js');

var http = require('http'),
    url  = require('url'),
    path = require('path'),
    fs   = require('fs')
    _    = require('underscore-1.1.5.min')['_']; 

var html = require('./html');

/* 
 * Naive! 
 * 
 * 1. Make a 404/500 functions
 * 2. Be smarter about setting content-type
 * 3. Be smarter about parsing the path and rendering static file
 */  
http.createServer(function(request, response) {
  
  function writeOutHtml(content, status, type) {
    status = status || 200;
    type = type || 'html';

    response.writeHead(status, {
      'Content-Type': 'text/' + type,
      'Content-Length': content.length  
    });
    response.end(content);
  }

  var requestPath = url.parse(request.url).pathname,
      content = "";

  console.log("REQ'D: " + requestPath);

  if(requestPath == '/') {
    fs.readFile(path.join(__dirname,'static','table.html'), function(err, data) {
      writeOutHtml(data);
    });

  } else {
    var re = /.+\.(html|png|css|js)$/i;
    var requestedFile = re.exec(requestPath);
 
    if(requestedFile) {
      var contentType = requestedFile[1];
      requestedFile = path.join(__dirname,'static',requestedFile.input);

      fs.stat(requestedFile, function(err, stats) {  
        if(err) {
          console.log('ERROR: trying to stat "' + requestedFile + '"');
          writeOutHtml('<html><body>we just crapped out</body></html>', 500);
        } else {
          fs.readFile(requestedFile, function(err, data) {
            if(err) {
              console.log('ERROR: trying to read: ' + requestedFile);
              writeOutHtml('<html><body>we just crapped out</body></html>', 500);
            } else {
              writeOutHtml(data, 200, contentType);
            } 
          }); 
        }
      });

    } else {
      writeOutHtml('<html><body>404</body></html>', 404);
    }
  }
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

