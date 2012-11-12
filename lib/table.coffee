class Table
  constructor: (@uid, options) ->
    @maxPlayers = options?.maxPlayers || 16
    @gamblers = []
    @shooter

  join: (player) ->
    @gamblers.push(player) unless player in @gamblers or @full()
    @shooter = player if @gamblers.length is 1
    this

  leave: (player) ->
    if player in @gamblers
      @gamblers = @gamblers.splice(@gamblers.indexOf(player), 1)
    this

  full: ->
    @gamblers.length >= @maxPlayers

module.exports = Table
