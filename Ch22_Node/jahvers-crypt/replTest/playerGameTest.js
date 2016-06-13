var Game = require('../lib/game');
var PlayerGame = require('../lib/playerGame');
var mapData = require('../maps/theDarkHouse');

var game = new Game(1, mapData);

var dax = new PlayerGame('Dax', game);
var kandra = new PlayerGame('Kandra', game);
var jahver = new PlayerGame('Jahver', game);