
bets = {}

class Bet
  constructor: ->
  win: (table, dice) -> no
  payout: (amount) -> 0
  sumOf: (dice) -> dice[0] + dice[1]

class Pass extends Bet
  win: (table, dice...) ->
    roll = @sumOf dice

    if not table.pointEstablished()
      return yes if roll is 7 or 11

    else
      return no if roll is 7
      return yes if roll is table.point

    no

bets.Pass = Pass


class DontPass extends Bet
  win: (table, dice) ->
    roll = @sumOf dice

    if not table.pointEstablished()
      return no if roll is 7 or 11

    else
      return yes if roll is 7
      return no if roll is table.point

    yes

bets.DontPass = DontPass


class Field extends Bet
  win: (table, dice) ->
    roll = @sumOf dice
    return yes if roll in [2,3,4,9,10,11,12]
    no

bets.Field = Field

module.exports = bets

