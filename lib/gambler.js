//
// A degenerate gambler
//
const redis = require('../server/db'),
      uuid = require('uuid'),
      crypto = require('crypto'),
      _ = require('underscore');

function Gambler(args) {
  // share this
  var defaults = { name: 'Anonymous Gambler', chipCount: 0 };
  var props = _.defaults(args || {}, defaults);
  _.extend(this, _.pick(props, 'id','name','chipCount','email'));

  // stored in the db as a string
  this.chipCount = parseInt(this.chipCount, 10) || 0;
}

module.exports = Gambler;

Gambler.prototype.save = function(fn) {
  if(!this.id)
    this.id = identification(this.email);
  redis.hmset(this.id, _.pick(this, 'id','name','chipCount','email'), fn);
};

Gambler.prototype.destroy = function(fn) {
  redis.del(this.id, fn);
};

Gambler.find = function(email, fn) {
  redis.hgetall(identification(email), function(err, obj) {
    if(err) return fn(err);
    obj === null ? fn(null,null) : fn(null, new Gambler(obj));
  });
};

// share this
function identification(email) {
  var env = (process.env.NODE_ENV || 'deve').slice(0,4),
      sha1 = crypto.createHash('sha1'),
      salt = "boxcars", // :)
      digest;

  sha1.update(email,'ascii').update(salt, 'ascii');
  digest = sha1.digest('base64');

  return 'craps:' + env + ':gid:' + digest;
}

