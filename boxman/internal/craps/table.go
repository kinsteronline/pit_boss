package craps

import (
	"errors"
	"fmt"

	nanoid "github.com/matoous/go-nanoid/v2"
)

type Table struct {
	ID       string     `json:"id"`
	Gamblers []*Gambler `json:"gamblers"`
	Capacity int        `json:"capacity"`
	Minimum  int        `json:"minimum"`
}

func NewTable(capacity, minimum int) *Table {
	id, _ := nanoid.New(8)

	return &Table{
		ID:       id,
		Gamblers: make([]*Gambler, capacity),
		Capacity: capacity,
		Minimum:  minimum,
	}
}

func (t *Table) String() string {
	return fmt.Sprintf("[Table] %s (%d/%d)", t.ID, t.Count(), t.Capacity)
}

func (t *Table) Count() int {
	count := 0
	for _, g := range t.Gamblers {
		if g != nil {
			count++
		}
	}
	return count
}

func (t *Table) Join(gambler *Gambler) error {
	if cap(t.Gamblers) == t.Count() {
		return errors.New("Table is full")
	}

	// If the Gambler is already at the table it's a noop

	return nil
}

func (t *Table) Leave(gambler *Gambler) error {
	// err: Gambler is not at table
	return nil
}
