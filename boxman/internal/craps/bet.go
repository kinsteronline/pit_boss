package craps

import "fmt"

type Bet struct {
	ID        string `json:"id"`
	Bettor    *Gambler
	Type      BetType
	Amount    int `json:"amount"`
	Paid      bool
	Timestamp int
}

func (b *Bet) String() string {
	return fmt.Sprintf("[Bet] %s: chips:%d", b.ID, b.Amount)
}
