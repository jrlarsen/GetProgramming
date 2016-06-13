(function () {
    "use strict";

    function getById (id) {
        return document.getElementById(id);
    }

    var item = getById("item");
    var bid = getById("bid");
    var asking = getById("asking");
    
    var socket = io('http://localhost:1337');

    var currentItem;

    function updateDisplay(data) {
        item.innerHTML = data.item;
        bid.innerHTML = data.bid;
        asking.innerHTML = data.bid + 5;
    }

    function sendBid() {
        socket.emit('bid', {item: currentItem});
    }

    function watchItem (e) {
        var button = e.target;
        currentItem = button.innerHTML;
        socket.emit('state', {item: currentItem});
    }

    function addListeners () {
        var itemButtons = getById("itemButtons");
        var bidButton = getById("btnBid");

        var buttons = itemButtons.getElementsByTagName("button");
        var i, len;

        for (i = 0, len = buttons.length; i < len; i++) {
            buttons[i].addEventListener("click", watchItem);
        }

        bidButton.addEventListener("click", sendBid);
        
        socket.on('update', updateDisplay);
    }

    addListeners();
})();