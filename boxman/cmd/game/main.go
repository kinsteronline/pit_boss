package main

import (
	"os"
	"time"

	"github.com/charmbracelet/log"
)

func main() {
	logger := log.NewWithOptions(os.Stderr, log.Options{
		ReportTimestamp: false,
		TimeFormat:      time.Kitchen,
	})

	logger.Info("PitBoss: Boxman version 0.0.1")
}
