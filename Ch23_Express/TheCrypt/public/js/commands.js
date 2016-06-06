(function () {
    "use strict";

    function parseCommand (commandString) {
        var commandWords = commandString.split(" ");
        var command = {
            type: commandWords.shift()
        };

        if (command.type === "go" || command.type === "use") {
            command.direction = commandWords.pop();
        }

        command.item = commandWords.join(" ");

        return command;
    }

    function doAction () {
        var txtCommand = document.getElementById("txtCommand");
        var commandString = txtCommand.value;
        var command = parseCommand(commandString);

        theCrypt.messageView.clear();

        game.do(command);

        txtCommand.value = "";
        txtCommand.focus();
    }

    var commandButton = document.getElementById("btnCommand");
    commandButton.addEventListener("click", doAction);

})();