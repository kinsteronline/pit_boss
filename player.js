function Player() {
  this.totalChips = 0.0;
}

Player.prototype.chipCount = function() {
  return this.totalChips;
};

module.exports = Player;
