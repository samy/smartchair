var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/camera.html', function(req, res){
  res.sendFile(__dirname + '/camera.html');
});
app.get('/battery.json', function(req, res){
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }));
});


http.listen(3000, function(){
  console.log('En attente sur *:3000');
});





process.stdin.setRawMode(true);
process.stdin.resume();
