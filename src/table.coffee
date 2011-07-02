#
#  A Craps Table Game
#

uuid = require 'node-uuid'

module.exports = class Table
  constructor: (minBet = 5.0, maxBet = 5000.0, maxPlayers = 16, odds = [3,4,5]) ->
    [ @minBet, @maxBet, @odds, @maxPlayers ] = [ minBet, maxBet, odds, maxPlayers ]
    @id = uuid()
    @players = new Array(maxPlayers)
    @shooter = null
    @bets = []
    @pointEstablished = false

  addPlayer: (player) ->
    if not full? and player not in @players
      @players[@players.indexOf(undefined)] = player
      @newShooter player if not @shooter?

  removePlayer: (player) ->
    if player in @players
      @players[@players.indexOf(player)] = undefined

  full: ->
    @players.length is @maxPlayers

  empty: ->
    @players.some (player) -> player isnt undefined

  newShooter: (player) ->
    @shooter = player if not @shooter?

  wagers: {
    'passLine': (dice) ->
      console.log dice
      /* is the point established? */
  }

