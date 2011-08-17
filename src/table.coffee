###
Table
=====
Where the fun happens, a Craps Table

Events Emitted
--------------
* player-joined, (Player)
* player-left, (Player)
* point, (number)
* new-shooter, (Player)
* no-more-bets
* dice-out
* natural
* come-out
* seven-out

Events Listened
---------------
* house-shutdown

###

{EventEmitter} = require 'events'

module.exports = class Table extends EventEmitter
  constructor: (@house) ->
    [ @point, @bets, @shooter, @players ] = [ null, [], null, [] ]

  join: (player) ->
    @shooter = player if @players.length is 0
    @players.push player
    @bets.push 'PASSLINEBET'
    @emit 'player:bet', 'PASSLINEBET'
    @emit 'player:joined', @table, player
    player

  # Is this even needed?
  player: (arg) ->
    return @players[arg] if typeof arg is 'number'
    return arg if arg in @players

    if typeof arg is 'string'
      potentials = @players.filter (player) ->
        player.uuid is arg
      potentials[0]
    else
      return null

