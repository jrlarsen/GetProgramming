/* Get Programming with JavaScript
 * Listing 17.08
 * The command module
 */

(function () {
  
  var parseCommand = function (commandString) {
    var commandWords = commandString.split(" ");
    var command = {
        type: commandWords.shift()
    };

    if (command.type === "use" || command.type === "go") {
        command.direction = commandWords.pop();
    }

    command.item = commandWords.join(" ");

    return command;
  };
  
  var doAction = function () {
    var commandString = document.getElementById("txtCommand").value;
    var command = parseCommand(commandString);
    var game = theCrypt.game;
  
    switch (command.type) {
      
      case "go":
        game.go(command.direction);
        break;
      
      case "get":
        game.get(command.item);
        game.me();
        game.here();
        break;
      
      case "use":
        game.use(command.item, command.direction);
        game.me();
        break;
      
      default:
        game.renderMessage("I don't know how to do that");
      
    }
  
  };
  
  var commandButton = document.getElementById("btnCommand");
  commandButton.addEventListener("click", doAction);
  
})();