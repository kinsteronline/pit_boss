#
#  A Craps Table Game
#

uuid = require 'node-uuid'

module.exports = class Table
  constructor: (minBet = 5.0, maxBet = 5000.0, odds = [3,4,5], maxPlayers = 16) ->
    [ @minBet, @maxBet, @odds, @maxPlayers ] = [ minBet, maxBet, odds, maxPlayers ]
    @id = uuid()
    @players = new Array(maxPlayers)


