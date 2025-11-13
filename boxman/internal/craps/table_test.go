package craps

import (
	"fmt"
	"testing"
)

func TestNewTable(t *testing.T) {
	t.Run("should be empty of degenerate gamblers", func(t *testing.T) {
		table := NewTable(10, 100)
		got := table.Count()
		want := 0

		if got != want {
			t.Errorf("got %d want %d", got, want)
		}
	})
	t.Run("should have an ID", func(t *testing.T) {
		table := NewTable(10, 5)

		fmt.Printf("table: %+v\n", table)

		got := table.ID
		if got == "" {
			t.Error("expecting an ID got nil")
		}
	})
}
