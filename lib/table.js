(function() {
  var Table, uuid;
  uuid = require('node-uuid');
  module.exports = Table = (function() {
    function Table(minBet, maxBet, maxPlayers, odds) {
      var _ref;
      if (minBet == null) {
        minBet = 5.0;
      }
      if (maxBet == null) {
        maxBet = 5000.0;
      }
      if (maxPlayers == null) {
        maxPlayers = 16;
      }
      if (odds == null) {
        odds = [3, 4, 5];
      }
      _ref = [minBet, maxBet, odds, maxPlayers], this.minBet = _ref[0], this.maxBet = _ref[1], this.odds = _ref[2], this.maxPlayers = _ref[3];
      this.id = uuid();
      this.players = new Array(maxPlayers);
    }
    Table.prototype.addPlayer = function(player) {
      if (!(typeof full !== "undefined" && full !== null) && this.players.indexOf(player !== -1)) {
        return this.players.push(player);
      }
    };
    Table.prototype.full = function() {
      return this.players.length === this.maxPlayers;
    };
    return Table;
  })();
}).call(this);
