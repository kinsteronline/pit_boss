/*
 * A CrapsTable should keep track of which gamblers are 
 * currently losing money.
 *
 * The craps game itself will have multiple states
 * comingout
 * pointestablished
 * payout
 */
class CrapsTable {

  constructor(tid, capacity = 8, minBet = 5) {
    this.tid = tid;
    this.capacity = capacity;
    this.minBet = minBet;

    // Gamblers can sit in an order
    this.gamblers = [];
    this.wagers = {};
  }

  get gamblerCount() {
    // I *really* wanted to use the arrow :)
    return this.gamblers.filter(g => g !== null).length;
  }

  get isFull() {
    return this.gamblerCount === this.capacity;
  }

  atTable(gambler) {
    return this.gamblers.indexOf(gambler.gid) !== -1;
  }


  join(gambler) {
    if (this.isFull || this.atTable(gambler)) {
      return false;
    }
    this.gamblers.push(gambler.gid);
    this.wagers[gambler.gid] = [];
    return gambler;
  }

  leave(gambler) {
    if (!this.atTable(gambler)) { return false; }
    //
    // payouts, forefits etc...
    this.gamblers[this.gamblers.indexOf(gambler.gid)] = null;
    delete this.wagers[gambler.gid];

    return gambler;
  }
}

