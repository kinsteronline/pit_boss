
const config = require('config'),
      express = require('express'),
      redis = require('./db'),
      RedisStore = require('connect-redis')(express),
      webserver = express(),
      auth = require('./auth');

module.exports = webserver;

webserver.use(express.cookieParser());
webserver.use(express.session({
  secret: config.sessions.secret, 
  store: new RedisStore({
    redis: redis,
    ttl: config.sessions.ttl
  })
}));

webserver.use(express.static(process.cwd() + '/client'));
webserver.use(express.bodyParser());

webserver.post('/gambler/login', auth.login);
webserver.all('/gambler/logout', auth.logout);
webserver.get('/gambler', auth.account);

webserver.get('/version', function(req,res) {
  res.end("Version: 0.0.6 (Easy-Six)");
});

webserver.get('*', function(req,res) {
  res.end('you just rolled craps! so sorry');
});



