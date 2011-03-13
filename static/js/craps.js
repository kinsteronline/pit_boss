/* PitBoss Craps Client */

/* Main communication with the PitBoss */
var ws = new Websocket('ws://127.0.0.1/');
/* TODO: var socket = new io.Socket({node_server_url}); */

/* The table game is drawn */
var canvas = document.getElementById("table");
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'red';
ctx.fillRect(10,10,490,290);


