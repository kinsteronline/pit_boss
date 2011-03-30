exports.House = function() {};
exports.House.prototype = {
  currentPlayers: [],
  enter: function() {
    this.currentPlayers.push("A Person");
  }
};
