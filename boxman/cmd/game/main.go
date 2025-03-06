package main

import (
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

	"github.com/charmbracelet/log"
	nanoid "github.com/matoous/go-nanoid/v2"
)

const (
	version = "0.0.2"
)

var (
	debug = flag.Bool("debug", false, "Show debugging logs")
	addr  = flag.String("addr", ":2312", "HTTP server port")
)

func serveRoot(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.Error(w, "404", http.StatusNotFound)
		return
	}

	if r.Method != http.MethodGet {
		http.Error(w, "405", http.StatusMethodNotAllowed)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	io.WriteString(w, fmt.Sprintf("<html><body style=\"background:#000;color:#aaa\">Boxman %s</body></html>", version))
}

func main() {
	flag.Parse()

	var loggingLevel log.Level
	if *debug {
		loggingLevel = log.DebugLevel
	} else {
		loggingLevel = log.Default().GetLevel()
	}

	logger := log.NewWithOptions(os.Stderr, log.Options{
		ReportCaller:    true,
		ReportTimestamp: false,
		TimeFormat:      time.Kitchen,
		Level:           loggingLevel,
	})

	id, err := nanoid.New(11)
	if err != nil {
		log.Fatal(err)
	}

	logger.Info(fmt.Sprintf("PitBoss ⚀ Boxman ⚁ Ver.%s", version))
	logger.Info("Session", "id", id)
	logger.Debug("Debugging this mess")

	http.HandleFunc("/", serveRoot)
	logger.Fatal(http.ListenAndServe(*addr, nil))
}
