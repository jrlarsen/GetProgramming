var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

var games = require('./lib/gameManager');
var SocketManager = require('./lib/socketManager');

io.on('connection', socketConnection);

function socketConnection (socket) {
    var cryptFlash;

    socket.on('start', start);
    socket.on('get', get);
    socket.on('go', go);
    socket.on('use', use);

    function start (data) {
        var playerGame = games.join(data.playerName, data.gameID);
        cryptFlash = new SocketManager(socket, playerGame);

        cryptFlash.join();
        cryptFlash.sendAll();
    }

    function get (data) {
        var playerGame = games.getPlayerGame(data.playerName, data.gameID);

        playerGame.clearMessages();
        playerGame.get();

        cryptFlash.sendAll();
    }

    function go (data) {
        var playerGame = games.getPlayerGame(data.playerName, data.gameID);

        playerGame.clearMessages();

        cryptFlash.leave();
        cryptFlash.sendOthers();

        playerGame.go(data.command.direction);

        cryptFlash.join();
        cryptFlash.sendAll();
    }

    function use (data) {
        var playerGame = games.getPlayerGame(data.playerName, data.gameID);

        playerGame.clearMessages();
        playerGame.use(data.command.item, data.command.direction);

        cryptFlash.sendAll();
    }
}

app.use(express.static("public"));

server.listen(1337);