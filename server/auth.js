
const request = require('request'),
      config = require('config');

const Gambler = require('../lib/gambler');

module.exports.login = function(req,res) {
  if(!req.body.assertion) {
    res.send(400, { error: 'broken login' });
    return;
  }

  var login = function(gambler) {
    req.session.gambler = gambler.id
    res.send(200, 'you logged right in: ' + gambler.id);
  };
  
  var options = {
    method: 'POST',
    url: 'https://verifier.login.persona.org/verify',
    form: {
      assertion: req.body.assertion,
      audience: 'http://' + config.webserver.host + ':' + config.webserver.port
    }
  };

  var verification = function(err, msg, body) {
    if(err) {
      res.send(500, 'something broke');
      return;
    }

    var data = JSON.parse(body);
    if(data.status === 'okay')  {

      Gambler.find(data.email, function(err, gambler) {
        if(err) res.send(400, 'broken login, sorry');

        if(!gambler) {
          gambler = new Gambler({ email: data.email, chipCount: 10000 });
          gambler.save(function() {
            login(gambler);
          });

        } else {
          login(gambler);
        }
      });
    }
  };

  request(options, verification);;
};

module.exports.logout = function(req,res) {
  req.session.gambler = null;
  res.send(200, 'Logged right on out');
};

module.exports.account = function(req,res) {
  res.json({ gambler: req.session.gambler });
};

