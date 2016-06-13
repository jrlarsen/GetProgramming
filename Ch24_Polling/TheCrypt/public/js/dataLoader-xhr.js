// dataLoader for use with xhr

(function () {
    "use strict";
    
    function loadData (url, method, postData, callback) {
        var xhr = new XMLHttpRequest();
        var dataToSend = null;
        xhr.open(method, url);
        
        if (postData) {
            dataToSend = JSON.stringify(postData);
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.addEventListener("load", function () {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        });

        xhr.send(dataToSend);
    }

    function postAction (command, callback) {
        var url = "/api/" + command.type;

        var data = {
            gameID: theCrypt.gameID,
            playerName: theCrypt.playerName,
            command: command
        };

        loadData(url, "POST", data, callback);
    }

    function pollState (playerName, gameID, callback) {
        var url = "/api/state";
        
        var data = {
            gameID: gameID,
            playerName: playerName
        };
        
        loadData(url, "POST", data, callback);
    }
    
    function getStartData (callback) {
        var url = '/api/start';
        var gameID = theCrypt.gameID;

        var data = {
            playerName: theCrypt.playerName
        };

        if (gameID !== undefined && gameID !== "") {
            data.gameID = gameID;
        }

        loadData(url, "POST", data, function (resData) {
            setInterval(function () {
                pollState(theCrypt.playerName, resData.gameID, callback);
            }, 5000);
            
            callback(resData);
        });
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.data = {
        postAction: postAction,
        getStartData: getStartData
    };

})();