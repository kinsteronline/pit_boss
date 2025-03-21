package craps

import "fmt"

type Bet struct {
	ID        string `json:"id"`
	Bettor    *Gambler
	Type      string
	Amount    uint `json:"amount"`
	Paid      bool
	Timestamp uint
}

func (b *Bet) String() string {
	return fmt.Sprintf("[Bet] %s: c:%d", b.ID, b.Amount)
}
