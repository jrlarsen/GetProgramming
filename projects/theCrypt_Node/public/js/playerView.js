(function () {
    "use strict";

    var playerDiv = document.getElementById("player");
    var playerScript = document.getElementById("playerTemplate");
    var itemScript = document.getElementById("itemTemplate");

    var playerTemplate = playerScript.innerHTML;
    var itemTemplate = itemScript.innerHTML;

    function render (data) {
        var itemsDiv;

        var items = data.items.map(function (itemName) {
            return { item : itemName };
        });

        playerDiv.innerHTML = gpwj.templates.fill(playerTemplate, data);

        itemsDiv = document.getElementById("playerItems");
        itemsDiv.innerHTML = gpwj.templates.fillList(itemTemplate, items);
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.playerView =  {
        render: render
    };

})();