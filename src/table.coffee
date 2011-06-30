#
#  A Craps Table Game
#

uuid = require 'node-uuid'

module.exports = class Table
  constructor: (minBet = 5.0, maxBet = 5000.0, maxPlayers = 16, odds = [3,4,5]) ->
    [ @minBet, @maxBet, @odds, @maxPlayers ] = [ minBet, maxBet, odds, maxPlayers ]
    @id = uuid()
    @players = new Array(maxPlayers)

  addPlayer: (player) ->
    if not full? and @players.indexOf player isnt -1
      @players.push player

  full: ->
    @players.length is @maxPlayers

