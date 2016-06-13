var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var games = require('./lib/gameManager');

app.use('/api/*', function (req, res, next) {
    req.playerGame = games.getPlayerGame(req.body.playerName, req.body.gameID);
    next();
});

app.post('/api/get', get);
app.post('/api/go', go);
app.post('/api/use', use);
app.post('/api/start', start);
app.post('/api/state', getState);  // added later in chapter

function get (req, res) {
    var playerGame = req.playerGame;
    playerGame.clearMessages();
    res.json(playerGame.get());
}

function go (req, res) {
    var playerGame = req.playerGame;
    playerGame.clearMessages();
    var command = req.body.command;
    res.json(playerGame.go(command.direction));
}

function use (req, res) {
    var playerGame = req.playerGame;
    playerGame.clearMessages();
    var command = req.body.command;
    res.json(playerGame.use(command.item, command.direction));
}

function start (req, res) {
    var playerGame = games.join(req.body.playerName, req.body.gameID);
    res.json(playerGame.getData());
}

// added later in chapter
function getState (req, res) {
    res.json(req.playerGame.getData());
}


app.use(express.static("public"));

app.listen(1337);