package craps

import (
	"fmt"

	nanoid "github.com/matoous/go-nanoid/v2"
)

type Game struct {
	ID      string
	Table   *Table
	Shooter *Gambler
	State   uint
	Bets    map[string]*Bet
}

func NewGame() *Game {
	id, _ := nanoid.New(8)

	return &Game{
		ID: id,
	}
}

func (g *Game) String() string {
	return fmt.Sprintf("[Game]%s", g.ID)
}

func (g *Game) JoinTable(tableID string, gamblerID string) error {
	// If table is full, for example
	// Correctly use errors!
	//
	// find table by id
	// find gambler by id
	// join a table and return the state? how?
	//

	// err := g.Table.Join(gambler)
	return nil
}

func (g *Game) LeaveTable(tableID string, gamblerID string) error {
	// err := g.Table.Leave(gambler)
	return nil
}
