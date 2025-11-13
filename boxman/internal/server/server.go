package server

import (
	"fmt"
	"net/http"

	"github.com/charmbracelet/log"
	"kinster.com/boxman/internal/infra"
)

type Server struct {
	Config infra.Config
	Logger *log.Logger
}

func NewServer(config infra.Config, logger *log.Logger) *Server {
	return &Server{
		Config: config,
		Logger: logger,
	}
}

func (s *Server) HomePageHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "405", http.StatusMethodNotAllowed)
		return
	}

	if r.URL.Path != "/" {
		http.Error(w, "404", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	fmt.Fprintln(w, "<html><body style=\"background:#000;color:#aaa\">Boxman</body></html>")
}

func (s *Server) websocketHandler(w http.ResponseWriter, r *http.Request) {
}
