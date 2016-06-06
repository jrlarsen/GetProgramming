(function () {
    "use strict";
    
    function getUrl (gameID, command) {
        var url = "/api/game" + gameID;
        url += "/" + command.type;
        
        if (command.type === 'use') {
            url += "/" + encodeURI(command.item);
        }
        
        if (command.type === 'use' || command.type === 'go') {
            url += "/" + encodeURI(command.direction);
        }
        
        return url;
    }

    function postAction (gameID, command, callback) {
        var url = getUrl(gameID, command);
        loadData(url, "POST", callback);
    }
    
    function getStartData (callback) {
        var url = '/api/start';
        loadData(url, "GET", callback);
    }
    
    function loadData (url, method, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        });

        xhr.open(method, url);
        xhr.send();
    }

    if (window.gpwj === undefined) {
        window.gpwj = {};
    }

    gpwj.data = {
        load: loadData,
        postAction: postAction,
        getStartData: getStartData
    };

})();