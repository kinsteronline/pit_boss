package craps

import (
	"fmt"

	nanoid "github.com/matoous/go-nanoid/v2"
)

type Table struct {
	ID       string     `json:"id"`
	Gamblers []*Gambler `json:"gamblers"`
	Capacity uint       `json:"capacity"`
	Minimum  uint       `json:"minimum"`
}

func NewTable(capacity uint, minimum uint) *Table {
	id, _ := nanoid.New(8)

	return &Table{
		ID:       id,
		Gamblers: make([]*Gambler, capacity),
		Capacity: capacity,
		Minimum:  minimum,
	}
}

func (t *Table) String() string {
	return fmt.Sprintf("[Table] %s", t.ID)
}

func (t *Table) Join(gambler *Gambler) error {
	// err: Table at capacity
	return nil
}

func (t *Table) Leave(gambler *Gambler) error {
	// err: Gambler is not at table
	return nil
}
