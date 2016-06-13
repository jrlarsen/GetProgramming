var buildMap = require('../lib/mapBuilder');

function Game (id, mapData) {
    this.id = id;
    this._players = [];

    this._firstPlace = buildMap(mapData);
}

Game.prototype = {
    getPlayersInPlace: function (placeTitle, playerToOmit) {
        var playersInPlace = [];
        
        this._players.forEach(function (player) {
            if (player === undefined || player !== playerToOmit) {
                var playerPlace = player.getPlace().getData();

                if (playerPlace.title === placeTitle) {
                    playersInPlace.push(player.getData());
                }
            }
        });

        return playersInPlace;
    },
    
    addPlayer: function (player) {
        this._players.push(player);        
        player.setPlace(this._firstPlace);
    }
};


// exports

module.exports = Game;