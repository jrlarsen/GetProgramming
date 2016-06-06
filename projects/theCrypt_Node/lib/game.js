var Player = require('./player');
var gameCounter = 0;

function getID () {
    gameCounter += 1;
    return gameCounter;
}

function Game (playerName, playerHealth, firstPlace) {
    this.id = getID();
    this.messages = [];
    
    this.player = new Player(playerName, playerHealth);
    this.player.setPlace(firstPlace);
    
    this.inPlay = true;
}

Game.prototype = {
    getData: function () {
        var player = this.player;
        var place = player.getPlace();
        
        return {
            gameID: this.id,
            player: player.getData(),
            place: place.getData(),
            messages: this.messages,
            inPlay: this.inPlay
        };
    },
    
    clearMessages: function () {
        this.messages = [];
    },
    
    addMessage: function (message) {
        this.messages.push(message);
    }
};

module.exports = Game;