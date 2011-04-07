/* PitBoss Craps Client */

/* Main communication with the PitBoss */
/* var ws = new Websocket('ws://127.0.0.1/'); */
/* TODO: var socket = new io.Socket({node_server_url}); */

/* The table game is drawn */
$(document).ready(function() {
  var canvas = document.getElementById("table");
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0F0';
  ctx.fillRect(10,10,790,350);

  ctx.fillStyle = '#FFF';
  ctx.fillRect(250,130,90,90);
  ctx.fillRect(450,130,90,90);

  ctx.fillStyle = '#000';

  ctx.beginPath();
  ctx.arc(295,175,6,0,Math.PI*360,false);
  ctx.fill();
 
  ctx.beginPath(); 
  ctx.arc(510,160,6,0,Math.PI*360,false);
  ctx.fill();
  
  ctx.beginPath(); 
  ctx.arc(480,190,6,0,Math.PI*360,false);
  ctx.fill();
});

