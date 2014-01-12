
const express = require('express'),
  redis = require('./db'),
  RedisStore = require('connect-redis')(express),
  webserver = express();

const auth = require('./auth');

module.exports = webserver;

// config me
const redisOptions = {
  redis: redis,
  ttl: 120
};
webserver.use(express.cookieParser());
webserver.use(express.session({
  secret: '\xc5\xee\xcd:\x92\xb4\xfe`\xd6\x1c\x10\r\xc1e\xfbsp\x9c\xc9\xc8\xf9\x87\xe3+',
  store: new RedisStore(redisOptions)
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



