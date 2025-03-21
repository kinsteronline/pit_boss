package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"

	"github.com/charmbracelet/log"
	"kinster.com/boxman/internal/craps"
)

// Interesante
//   var version = "dev"
// and then
//   $ go build -ldflags="-X 'main.version=1.0.1'" -o myapp

const (
	version = "0.0.3"
)

type config struct {
	addr  string
	env   string
	debug bool
}

type server struct {
	config config
	logger *log.Logger
}

func main() {
	var cfg config
	flag.StringVar(&cfg.addr, "addr", ":2312", "Game server address")
	flag.StringVar(&cfg.env, "env", "dev", "Environment (dev|tst|prd)")
	flag.BoolVar(&cfg.debug, "debug", false, "Show debug logging")
	flag.Parse()

	srv := &server{
		config: cfg,
		logger: newLoggerWithConfig(cfg),
	}

	http.HandleFunc("/", srv.homePageHandler)
	srv.logger.Info(fmt.Sprintf("PitBoss ⚀ Boxman ⚁ Ver.%s (%s)", version, srv.config.env))

	crapsGame := craps.NewGame()
	srv.logger.Debug("Starting a new single table game", "game", crapsGame.String())

	srv.logger.Fatal(http.ListenAndServe(srv.config.addr, nil))
}

func newLoggerWithConfig(config config) *log.Logger {
	level := log.InfoLevel
	if config.debug {
		level = log.DebugLevel
	}

	return log.NewWithOptions(os.Stdout, log.Options{
		ReportCaller:    config.env == "dev",
		ReportTimestamp: config.env == "prd",
		Level:           level,
	})
}
