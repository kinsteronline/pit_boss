const redis = require('redis'),
      options = {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || 6379
      };
// Would be nice to specifiy the DB too
var client = redis.createClient(options);
module.exports = client;

client.on('connect', function() {
  console.log('redis ] connected');
});

client.on('end', function() {
  console.log('redis ] has ended');
});

client.on('error', function(err) {
  console.log('redis ] ERR!!!!');
  console.log('redis ] ' + err);
});
