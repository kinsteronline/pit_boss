package craps

import "testing"

func TestNewTable(t *testing.T) {
	got := NewTable(10, 5)

	if got == nil {
		t.Error("Did not create a table")
	}
}
