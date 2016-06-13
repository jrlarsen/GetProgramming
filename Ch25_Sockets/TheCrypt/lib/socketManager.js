function SocketManager (socket, playerGame) {
    this._socket = socket;
    this._playerGame = playerGame;
    this._keyStub = "game_" + playerGame.gameID + "_";
}

SocketManager.prototype = {

    _getChannel: function () {
        return this._keyStub + this._playerGame.getPlaceTitle();
    },

    _send: function (data, onlyToMe) {
        var socket = this._socket;
        var channel = this._getChannel();

        if (onlyToMe) {
            socket.emit('state', data);
        } else {
            delete data.messages;
            socket.to(channel).emit('state', data);
        }
    },

    sendAll: function () {
        var data = this._playerGame.getData();

        this._send(data, true);
        this._send(data);
    },

    sendOthers: function () {
        this._send(this._playerGame.getData(true));
    },

    join: function () {
        this._socket.join(this._getChannel());
    },

    leave: function (playerGame) {
        this._socket.leave(this._getChannel());
    }
};

module.exports = SocketManager;