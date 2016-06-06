(function () {
    "use strict";

    var playersDiv = document.getElementById("players");
    var playerScript = document.getElementById("playerTemplate");
    var itemScript = document.getElementById("itemTemplate");

    var playerTemplate = playerScript.innerHTML;
    var itemTemplate = itemScript.innerHTML;

    function render (players) {
        playersDiv.innerHTML = "";
        players.forEach(renderPlayer);
    }

    function renderPlayer (player) {
        var playerDiv = document.createElement('div');
        playerDiv.className = "player";
        var itemsDiv;

        var items = player.items.map(function (itemName) {
            return { item : itemName };
        });

        playerDiv.innerHTML = gpwj.templates.fill(playerTemplate, player);
        playersDiv.appendChild(playerDiv);

        itemsDiv = document.getElementById("playerItems_" + player.name);
        itemsDiv.innerHTML = gpwj.templates.fillList(itemTemplate, items);
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.playerView =  {
        render: render
    };

})();