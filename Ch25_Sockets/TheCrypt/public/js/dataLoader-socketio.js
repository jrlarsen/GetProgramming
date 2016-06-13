// dataLoader for use with socket.io

(function () {
    "use strict";

    var socket = io('http://localhost:1337');

    function postAction (command) {
        var data = {
            gameID: theCrypt.gameID,
            playerName: theCrypt.playerName,
            command: command
        };
        
        socket.emit(command.type, data);
    }
    
    function getStartData (callback) {
        var gameID = theCrypt.gameID;

        var data = {
            playerName: theCrypt.playerName
        };

        if (gameID !== undefined && gameID !== "") {
            data.gameID = gameID;
        }

        socket.on('state', callback);
        
        socket.emit('start', data);
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.data = {
        postAction: postAction,
        getStartData: getStartData
    };

})();