var gameHost = window.document.location.host.replace(/:.*/, '');

var ws = new WebSocket('ws://' + gameHost + ':2312');
console.dir(ws);
ws.addEventListener('open', function() {
	console.log("OPENEED!");
	ws.send('xxx');
	ws.send('yyy');
});

ws.addEventListener('message', function(event) {
	console.dir(event);
});

