var Game = require('./game');
var games = {};

var buildMap = require('./mapBuilder');
var mapData = require('../maps/TheDarkHouse.json');

function startGame (playerName, playerHealth) {
    var map = buildMap(mapData);
    var place = map.store[map.firstPlace];

    var game = new Game(playerName, playerHealth, place);

    games[game.id] = game;
    return game;
}

function endGame (id) {
    delete games[id];
}

function getGame (id) {
    return games[id];
}

module.exports = {
    start: startGame,
    end: endGame,
    get: getGame
};