const redis = require('redis'),
      config = require('config');

var debug = require('debug')('redis');

var client = redis.createClient(config.redis.port, config.redis.host, config.redis);
if(config.redis.db !== 0) client.select(config.redis.db); 

module.exports = client;

client.on('connect', function() {
  debug('connect on ' + config.redis.host + ':' + config.redis.port);
});

client.on('end', function() {
  debug('ended');
});

client.on('error', function(err) {
  console.log('redis ] ERR!!!!');
  console.log('redis ] ' + err);
});
