
const path = require('path');

const express = require('express');
const game = express();
const server = require('http').Server(game);
const sio = require('socket.io')(server);

game.use(express.static(path.join(__dirname, 'static')));

server.listen(2312, function() {
  console.log("Craps on %s:%s", server.address().address, server.address().port);
});

sio.on("connection", function(socket) {
  console.log("Connected");
});

