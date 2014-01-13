const redis = require('redis'),
      config = require('config');

var client = redis.createClient(config.redis.port, config.redis.host, config.redis);
if(config.redis.db !== 0) client.select(config.redis.db); 

module.exports = client;

client.on('connect', function() {
  console.log('redis ] connected on ' + config.redis.host + ':' + config.redis.port);
});

client.on('end', function() {
  console.log('redis ] has ended');
});

client.on('error', function(err) {
  console.log('redis ] ERR!!!!');
  console.log('redis ] ' + err);
});
