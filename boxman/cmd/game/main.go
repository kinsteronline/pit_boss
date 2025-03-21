package main

import (
	"flag"
	"fmt"
	"net/http"
	"os"

	"github.com/charmbracelet/log"
	"kinster.com/boxman/internal/craps"
	"kinster.com/boxman/internal/infra"
	"kinster.com/boxman/internal/server"
)

// Interesante
//   var version = "dev"
// and then
//   $ go build -ldflags="-X 'main.version=1.0.1'" -o myapp

const (
	Version = "0.0.3"
)

func main() {
	var config infra.Config

	flag.StringVar(&config.Addr, "addr", ":2312", "Game server address")
	flag.StringVar(&config.Env, "env", "dev", "Environment (dev|tst|prd)")
	flag.BoolVar(&config.Debug, "debug", false, "Show debug logging")
	flag.Parse()

	logger := newLoggerWithConfig(config)
	srv := server.NewServer(config, logger)

	http.HandleFunc("/", srv.HomePageHandler)
	srv.Logger.Info(fmt.Sprintf("PitBoss ⚀ Boxman ⚁ Ver.%s (%s)", Version, srv.Config.Env))

	crapsGame := craps.NewGame()
	srv.Logger.Debug("Starting a new single table game", "game", crapsGame.String())

	err := http.ListenAndServe(srv.Config.Addr, nil)
	srv.Logger.Fatal(err)
	os.Exit(1)
}

func newLoggerWithConfig(config infra.Config) *log.Logger {
	level := log.InfoLevel
	if config.Debug {
		level = log.DebugLevel
	}

	return log.NewWithOptions(os.Stdout, log.Options{
		ReportCaller:    config.Env == "dev",
		ReportTimestamp: config.Env == "prd",
		Level:           level,
	})
}
