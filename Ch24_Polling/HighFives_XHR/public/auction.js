(function () {
    "use strict";

    var bid = document.getElementById("bid");
    var asking = document.getElementById("asking");
    var bidButton = document.getElementById("btnBid");

    function loadData(url, method, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.addEventListener("load", function () {
            var data = JSON.parse(xhr.responseText);
            callback(data);
        });

        xhr.send();
    }

    function updateDisplay(data) {
        bid.innerHTML = data.bid;
        asking.innerHTML = data.bid + 5;
    }

    function sendBid() {
        loadData("/bid", "POST", updateDisplay);
    }

    function getState() {
        loadData("/state", "GET", updateDisplay);
    }

    bidButton.addEventListener("click", sendBid);

    getState();

    setInterval(getState, 1000);
    
})();