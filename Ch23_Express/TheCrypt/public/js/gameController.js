(function () {
    "use strict";

    function render (data) {        
        if (data.place) {
            theCrypt.placeView.render(data.place);
        }

        if (data.players) {
            theCrypt.playerView.render(data.players);
        }

        if (data.messages && data.messages.length) {
            theCrypt.messageView.render(data.messages.join('<br />'));
        }
    }

    function updateState (data) {
        theCrypt.gameID = data.gameID;
        render(data);
    }

    function init (playerName, gameID) {
        theCrypt.playerName = playerName;
        theCrypt.gameID = gameID;
        
        theCrypt.data.getStartData(updateState);
    }

    function doAction (command) {
        theCrypt.data.postAction(command, updateState);
    }

    // Assign the public interface
    window.game = {
        do: doAction,
        init: init
    };

})();