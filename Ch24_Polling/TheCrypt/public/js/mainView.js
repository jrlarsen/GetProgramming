(function () {
    "use strict";

    var mainDiv = document.getElementById("main");
    var startFormDiv = document.getElementById("startControls");

    var userDetailsTemplate = document.getElementById("userDetailsTemplate").innerHTML;

    function showMain () {
        mainDiv.className = "";
    }
    
    function renderUser () {
        startFormDiv.innerHTML = gpwj.templates.fill(userDetailsTemplate, {
            playerName: theCrypt.playerName,
            gameID: theCrypt.gameID
        });
    }

    function render () {
        showMain();
        renderUser();
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.mainView =  {
        render: render
    };

})();