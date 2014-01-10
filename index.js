//
// I want to start a server
//
const server = require('./server'),
  binding = {
    port: process.env.PORT || process.env.npm_package_config_port || 2312,
    host: process.env.HOST || '127.0.0.1'
  };

server.listen(binding.port, binding.host, function() {
  console.log("PitBoss: Gamblin' is happening on port %s:%d", binding.host, binding.port);
});

