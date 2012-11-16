expect  = require 'expect.js'

Table = require '../lib/table'
{ Pass, DontPass, Field } = require('../lib/bets')

describe 'point is not established', ->
  table = new Table('1')
  table.pointEstablished = -> no

  describe 'Pass bet', ->
    it 'wins with 7', ->
      bet = new Pass()
      expect(bet.win(table, 4,3)).to.be yes


  describe "Don't Pass bet", ->
    it 'loses with 7', ->
      bet = new DontPass()
      expect(bet.win(table, 4,3)).to.be no


describe 'point is established', ->
  table = new Table('2')

  describe 'on 4', ->
    beforeEach(-> table.point = 4)

    it 'wins Pass bet', ->
      bet = new Pass()
      expect(bet.win(table, 2,2)).to.be yes
      expect(bet.win(table, 3,1)).to.be yes


  describe 'on 5', ->
    beforeEach(-> table.point = 5)

    it 'wins Pass bet', ->
      bet = new Pass()
      expect(bet.win(table, 1,4)).to.be yes
      expect(bet.win(table, 2,3)).to.be yes


  describe 'point is 6', ->
    beforeEach(-> table.point = 6)

    it 'wins Pass bet', ->
      bet = new Pass()
      expect(bet.win(table, 3,3)).to.be yes
      expect(bet.win(table, 4,2)).to.be yes
      expect(bet.win(table, 5,1)).to.be yes


  describe 'point is 8', ->
    beforeEach(-> table.point = 8)

    it 'wins Pass bet', ->
      bet = new Pass()
      expect(bet.win(table, 4,4)).to.be yes
      expect(bet.win(table, 5,3)).to.be yes
      expect(bet.win(table, 6,2)).to.be yes


  describe 'point is 9', ->
    beforeEach(-> table.point = 9)

    it 'wins Pass bet', ->
      bet = new Pass()
      expect(bet.win(table, 5,4)).to.be yes
      expect(bet.win(table, 6,3)).to.be yes


  describe 'point is 10', ->
    beforeEach(-> table.point = 10)
    
    it 'wins Pass bet', ->
      bet = new Pass()
      expect(bet.win(table, 5,5)).to.be yes
      expect(bet.win(table, 6,4)).to.be yes


describe 'dice rolling', ->
  table = new Table('3')
  diceRolled = [0,0]

  describe ' ⚀ ⚀ ' , ->
    beforeEach(-> diceRolled = [1,1])

    it 'wins Field', ->
      bet = new Field()
      expect(bet.win(table, diceRolled)).to.be yes

  describe '1 and 2', ->
    beforeEach(-> diceRolled = [1,2])
    it 'wins Field', ->
      bet = new Field()
      expect(bet.win(table, diceRolled)).to.be yes

  describe '1 and 3', ->
    beforeEach(-> diceRolled = [1,3])
    it 'wins Field', ->
      bet = new Field()
      expect(bet.win(table, diceRolled)).to.be yes

  describe '1 and 4', ->
    beforeEach(-> diceRolled = [1,4])
    it 'wins Field', ->
      bet = new Field()
      expect(bet.win(table, diceRolled)).to.be no

  describe '1 and 5', ->
    beforeEach(-> diceRolled = [1,5])
    it 'wins Field', ->
      bet = new Field()
      expect(bet.win(table, diceRolled)).to.be no





