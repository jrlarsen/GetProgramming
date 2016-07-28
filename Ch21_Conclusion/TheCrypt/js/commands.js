// Get Programming with JavaScript
// Chapter 21
// The command module

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
  
    switch (command.type) {
      
      case "get":
        game.get();
        break;
      
      case "go":
        game.go(command.direction);
        break;
      
      case "use":
        game.use(command.item, command.direction);
        break;
      
      default:
        theCrypt.messageView.render("I don't know how to do that");
      
    }
    
    txtCommand.value = "";
    txtCommand.focus();
  }
  
  var commandButton = document.getElementById("btnCommand");
  commandButton.addEventListener("click", doAction);
  
})();
