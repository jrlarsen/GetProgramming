(function () {
    "use strict";

    function render (data) {
        theCrypt.placeView.render(data.place);
        theCrypt.playerView.render(data.player);
        if (data.messages !== undefined) {
            renderMessages(data.messages);
        }
    }

    function renderMessage (message) {
        theCrypt.messageView.render(message);
    }
    
    function renderMessages (messages) {
        messages.forEach(renderMessage);
    }

    function init () {
        gpwj.data.getStartData(function (data) {
            render(data);
            theCrypt.gameID = data.gameID;
        });
    }

    function doAction (command) {
        gpwj.data.postAction(theCrypt.gameID, command, function (data) {
            render(data);
        });
    }

    // Assign the public interface
    window.game = {
        do: doAction,
        init: init,
        message: renderMessage
    };

})();