package infra

// I put this in the infra since it consumes flags from the outside world?

type Config struct {
	Addr  string
	Env   string
	Debug bool
}
