package craps

type BetType byte

const (
	PassLine BetType = iota
	DontPassLine
	Come
	DontCome
)
