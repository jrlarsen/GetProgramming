var Player = require('./player');

function PlayerGame (playerName, game) {
    this._player = new Player(playerName, 50);
    game.addPlayer(this._player);
    this._game = game;
    this._messages = [];
    this._inPlay = true;
    this._playerName = playerName;
}

PlayerGame.prototype = {
    clearMessages: function () {
        this._messages = [];
    },

    addMessage: function (message) {
        this._messages.push(message);
    },

    getData: function (onlyOtherPlayers) {
        var game = this._game;
        var placeData = this._player.getPlace().getData();

        var playerToOmit = null;
        if (onlyOtherPlayers) {
            playerToOmit = this._player;
        }

        return {
            gameID: game.id,
            players: game.getPlayersInPlace(placeData.title, playerToOmit),
            place: placeData,
            inPlay: this._inPlay,
            messages: this._messages
        };
    },

    _checkStatus: function () {
        if (this._player.getData().health <= 0) {
            this._inPlay = false;
            this.addMessage("Overcome by your wounds...");
            this.addMessage("...you fall to the ground.");
            this.addMessage("- Your adventure is over -");
        }
    },

    get: function () {
        var player = this._player;
        var place = player.getPlace();

        var item = place.getLastItem();

        if (item !== undefined) {
            player.addItem(item);
        } else {
            this.addMessage("There is no item to get");
        }

        return this.getData();
    },

    use: function (item, direction) {
        var player = this._player;
        var place = player.getPlace();
        var challenge = place.getChallenge(direction);

        if (challenge === undefined || challenge.complete === true) {
            this.addMessage("You don't need to use that there");
        } else if (player.hasItem(item)) {

            if (item === challenge.requires) {
                this.addMessage(challenge.success);
                challenge.complete = true;
                if (challenge.itemConsumed) {
                    player.removeItem(item);
                }
            } else {
                this.addMessage(challenge.failure);
            }

        } else {
            this.addMessage("You don't have that item");
        }

        return this.getData();
    },

    go: function (direction) {
        var player = this._player;
        var place = player.getPlace();
        var destination = place.getExit(direction);
        var challenge = place.getChallenge(direction);

        if (destination === undefined) {
            this.addMessage("There is no exit in that direction");
        } else {
            if ((challenge === undefined) || challenge.complete) {
                player.setPlace(destination);
            } else {
                if (challenge.damage) {
                    player.applyDamage(challenge.damage);
                }
                this.addMessage(challenge.message);
                this._checkStatus();
            }
        }

        return this.getData();
    }
};

module.exports = PlayerGame;