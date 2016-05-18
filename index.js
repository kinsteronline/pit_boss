'use strict';

const ws = require('ws');

const port = parseInt(process.env['PORT'], 10) || 2312;
const wss = new ws.Server({ port });

wss.on('connection', (ws) => {
  console.log('connection');

  ws.on('message', (msg) => {
    console.log('in:message');
    console.log(JSON.parse(msg));
  });
});



console.log(`WebSocket on port ${port}`);
