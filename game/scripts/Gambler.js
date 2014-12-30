/*
 * The Gambler
 */

class Gambler {
  constructor(gid, name = "Degenerate Gambler", chipCount = 0) {
    this.gid = gid;
    this.name = name;
    this.chipCount = chipCount;
  }
}

function createGambler(gamblerName) {
  // This is all that is really needed
  var gambler = { gid: '7',  name:  gamblerName || "Degenerate Gambler", chipCount: 100 };
  return gambler;
}

