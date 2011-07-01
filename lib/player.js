(function() {
  var Player;
  module.exports = Player = (function() {
    function Player(name, chipCount) {
      if (chipCount == null) {
        chipCount = 0;
      }
      this.name = name;
      this.chipCount = chipCount;
    }
    return Player;
  })();
}).call(this);
