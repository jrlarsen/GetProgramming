/* Adventures in JavaScript
 * Listing 5.01
 * Relying on a variable outside of the function
 */

var message;
var showMessage;

message = "It's full of stars!";

showMessage = function () {
    console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Create a showMessageLength function
 *    that logs the length of the message.
 *
 */