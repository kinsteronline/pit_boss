package main

import (
	"fmt"
)

// a die will be uint8

const (
	version = "0.0.1"
)

type Gambler struct {
	Name  string
	Chips uint
}

type Table struct {
	Gamblers []Gambler
	Capacity uint
	Minimum  uint
}

type Bet struct {
	Bettor    Gambler
	Type      string
	Amount    uint
	Paid      bool
	Timestamp uint
}

type Game struct {
	Table   Table
	Shooter Gambler
	State   uint
	Bets    map[string]Bet
	// Can I / should I use a []byte key?
}

func main() {
	fmt.Printf("PitBoss ⚀ Boxman ⚁ Ver.%s\n", version)

	g := Gambler{
		Name:  "Velvet Jones",
		Chips: 25_000,
	}

	fmt.Printf("%#v\n", g)
	fmt.Println(g.Chips)
}
