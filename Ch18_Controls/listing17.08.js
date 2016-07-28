// Get Programming with JavaScript
// Listing 18.08
// Converting a command string into a command object

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


/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) At the prompt, test the parseCommand
 *    function. Check the returned
 *    objects to make sure they have
 *    the correct type, direction and item.
 *
 *    > parseCommand("go north")
 *    > parseCommand("get a rusty key")
 *    > parseCommand("use a rusty key north")
 *
 * 4) Assign the returned object to
 *    a variable and then access
 *    its properties.
 *
 *    > var cmd = parseCommand("use a rusty key north")
 *    > cmd.type
 *    > cmd.direction
 *    > cmd.item
 *
 */
