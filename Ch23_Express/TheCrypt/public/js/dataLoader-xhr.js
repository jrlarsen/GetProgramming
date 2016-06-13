// dataLoader for use with xhr

(function () {
    "use strict";
    
    function loadData (url, method, data, callback) {
        var xhr = new XMLHttpRequest();
        var requestData = null;
        xhr.open(method, url);
        
        if (data) {
            requestData = JSON.stringify(data);
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.addEventListener("load", function () {
            var responseData = JSON.parse(xhr.responseText);
            callback(responseData);
        });

        xhr.send(requestData);
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
    
    function getStartData (callback) {
        var url = '/api/start';

        loadData(url, "GET", {}, callback);
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.data = {
        postAction: postAction,
        getStartData: getStartData
    };

})();