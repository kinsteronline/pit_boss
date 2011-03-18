exports.html = function(url) {
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



