var express = require('express');
var expressWs = require('express-ws');
var expressWs = expressWs(express());
var app = expressWs.app;

app.use(express.static('public'));

var aWss = expressWs.getWss('/');

app.ws('/', function(ws, req) {
  console.log('Socket Connected');

  ws.onmessage = function(msg) {
    aWss.clients.forEach(function (client) {
      client.send(msg.data)
    });
  };
});

app.listen(3444);
