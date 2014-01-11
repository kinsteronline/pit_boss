//
// A degenerate gambler
//
const redis = require('../server/db'),
      uuid = require('uuid'),
      _ = require('underscore');

function Gambler(args) {
  // share this
  var defaults = { name: 'Anonymous Gambler', chipCount: 0 };
  var props = _.defaults(args || {}, defaults);
  _.extend(this, _.pick(props, 'id','name','chipCount'));

  // stored in the db as a string
  this.chipCount = parseInt(this.chipCount, 10) || 0;
}

module.exports = Gambler;

Gambler.prototype.save = function(fn) {
  this.id = identification(this.id);
  redis.hmset(this.id, _.pick(this, 'id','name','chipCount'), fn);
};

Gambler.prototype.destroy = function(fn) {
  redis.del(this.id, fn);
};

Gambler.find = function(id, fn) {
  redis.hgetall(id, function(err, obj) {
    if(err) return fn(err);
    obj === null ? fn(null,null) : fn(null, new Gambler(obj));
  });
};

// share this
function identification(candidate) {
  var env = (process.env.NODE_ENV || 'deve').slice(0,4);
  return 'craps:' + env + ':gid:' + (candidate || uuid.v4());
}


