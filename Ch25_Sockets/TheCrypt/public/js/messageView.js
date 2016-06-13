(function () {
    "use strict";

    var messageDiv = document.getElementById("messages");
    var templateScript = document.getElementById("messageTemplate");
    var template = templateScript.innerHTML;

    function render (message) {
        var data = { message: message };
        messageDiv.innerHTML = gpwj.templates.fill(template, data);
    }

    function clear () {
        messageDiv.innerHTML = "";
    }

    if (window.theCrypt === undefined) {
        window.theCrypt = {};
    }

    theCrypt.messageView = {
        render: render,
        clear: clear
    };

})();