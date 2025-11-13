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
	return fmt.Sprintf("[Game] %s", g.ID)
}
