package craps

import "fmt"

type Gambler struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Chips uint   `json:"chips"`
}

func (g *Gambler) String() string {
	return fmt.Sprintf("[Gambler] %s: %s c:%d", g.ID, g.Name, g.Chips)
}
