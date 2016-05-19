/* Get Programming with JavaScript
 * Listing 16.06
 * Using a switch block to issue game commands
 */

var doAction = function (command) {
  
  switch (command.type) {
      
    case "go":
      theCrypt.game.go(command.direction);
      break;
      
    case "get":
      theCrypt.game.get(command.item);
      break;
      
    case "use":
      theCrypt.game.use(command.item, command.direction);
      break;
      
    default:
      theCrypt.game.renderMessage("I don't know how to do that");
      
  }
  
};


/* Further Adventures
 *
 * We can't test the existing cases
 * without loading other modules.
 *
 * We can add a new case though.
 *
 * 1) Before the default case,
 *    add a case that is executed
 *    when the type is "hello".
 *
 *    case "hello":
 *
 * 2) Add code to log a message
 *    to the console, using the
 *    name property of the
 *    command object.
 *
 *    case "hello":
 *      console.log("Hello " + command.name);
 *      break;
 *
 * 3) Run the program.
 *
 * 4) At the console prompt,
 *    create a command object and
 *    set the type and name properties.
 *
 *    > var cmd = {}
 *    > cmd.type = "hello"
 *    > cmd.name = "Dax"
 *
 * 5) Call the doAction function,
 *    passing it the command object.
 *
 *    > doAction(cmd);
 *      "Hello Dax"
 *
 */


