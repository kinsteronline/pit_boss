package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"

	"github.com/charmbracelet/log"
)

const (
	version = "0.0.3"
)

type config struct {
	addr  string
	env   string
	debug bool
}

type game struct {
	config config
	logger *log.Logger
}

func main() {
	var cfg config
	flag.StringVar(&cfg.addr, "addr", ":2312", "Game server address")
	flag.StringVar(&cfg.env, "env", "dev", "Environment (dev|tst|prd)")
	flag.BoolVar(&cfg.debug, "debug", false, "Show debug logging")
	flag.Parse()

	game := &game{
		config: cfg,
		logger: newLoggerWithConfig(cfg),
	}

	http.HandleFunc("/", game.homePageHandler)
	game.logger.Info(fmt.Sprintf("PitBoss ⚀ Boxman ⚁ Ver.%s (%s)", version, game.config.env))
	game.logger.Debug("What the shit am I even doing?")
	game.logger.Fatal(http.ListenAndServe(game.config.addr, nil))
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
