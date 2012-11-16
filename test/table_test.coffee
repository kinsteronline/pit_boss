expect = require 'expect.js'

Table   = require '../lib/table'
Player  = require '../lib/player'

describe 'Table', ->
  describe '#new', ->
    crapsTable = new Table('1')

    it 'should start with no gamblers', ->
      expect(crapsTable.gamblers).to.be.empty()

    it 'should not start full', ->
      expect(crapsTable.full()).to.be(no)

    it 'should limit the number of players to 16 be default', ->
      expect(crapsTable.maxPlayers).to.be 16

    it 'should allow a variable number of players', ->
      smallTable = new Table('2', maxPlayers: 4)
      expect(smallTable.maxPlayers).to.be 4

    it 'should start with the dealer button off', ->
      expect(crapsTable.point).to.equal(0)

    it 'should not have the point established', ->
      expect(crapsTable.pointEstablished()).to.equal(no)

  describe '#join', ->
    gambler = new Player('hundredaire')
    lowRollerJim = new Player('low-roller-jim')

    describe 'with an empty table', ->
      it 'should designate the first player to step up as the shooter', ->
        crapsTable = new Table('1')
        crapsTable.join gambler
        expect(crapsTable.shooter).to.equal gambler

    describe 'with a full table', ->
      it 'should not allow another player to join', ->
        superSmallTable = new Table('1', maxPlayers: 1)
        superSmallTable.join gambler
        expect(superSmallTable.join(lowRollerJim)).to.equal(no)
        expect(superSmallTable.gamblers).to.have.length 1
        expect(superSmallTable.gamblers).to.contain gambler
        expect(superSmallTable.gamblers).to.not.contain lowRollerJim

    describe 'when not full', ->
      crapsTable = new Table('1')

      it 'should allow a new player to join', ->
        expect(crapsTable.join(gambler)).to.not.equal(no)
        expect(crapsTable.gamblers).to.have.length 1
        expect(crapsTable.gamblers).to.contain gambler


