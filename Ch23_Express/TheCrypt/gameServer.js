var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mapData = require('./maps/theDarkHouse');
var Game = require('./lib/game');
var PlayerGame = require('./lib/playerGame');

var game = new Game(1, mapData);
var playerGame = new PlayerGame("Kandra", game);


app.post('/api/get', get);
app.post('/api/go', go);
app.post('/api/use', use);
app.get('/api/start', start);

function get (req, res) {
    playerGame.clearMessages();
    res.json(playerGame.get());
}

function go (req, res) {
    playerGame.clearMessages();
    var command = req.body.command;
    res.json(playerGame.go(command.direction));
}

function use (req, res) {
    playerGame.clearMessages();
    var command = req.body.command;
    res.json(playerGame.use(command.item, command.direction));
}

function start (req, res) {
    res.json(playerGame.getData());
}


app.use(express.static("public"));


app.listen(1337);