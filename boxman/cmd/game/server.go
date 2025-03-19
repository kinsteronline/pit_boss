package main

import (
	"fmt"
	"io"
	"net/http"
)

func (*game) homePageHandler(w http.ResponseWriter, r *http.Request) {
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

func (*game) websocketHandler(w http.ResponseWriter, r *http.Request) {
}
