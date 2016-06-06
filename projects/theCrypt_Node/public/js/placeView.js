(function () {
    "use strict";

    var placeDiv = document.getElementById("place");
    var placeScript = document.getElementById("placeTemplate");
    var itemScript = document.getElementById("itemTemplate");

    var placeTemplate = placeScript.innerHTML;
    var itemTemplate = itemScript.innerHTML;

    function render (data) {
        var itemsDiv;
        var exitsDiv;

        var items = data.items.map(function (itemName) {
            return { item : itemName };
        });

        var exits = data.exits.map(function (exitName) {
            return { item : exitName };
        });

        placeDiv.innerHTML = gpwj.templates.fill(placeTemplate, data);

        itemsDiv = document.getElementById("placeItems");
        itemsDiv.innerHTML = gpwj.templates.fillList(itemTemplate, items);

        exitsDiv = document.getElementById("placeExits");
        exitsDiv.innerHTML = gpwj.templates.fillList(itemTemplate, exits);
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.placeView = {
        render: render
    };

})();