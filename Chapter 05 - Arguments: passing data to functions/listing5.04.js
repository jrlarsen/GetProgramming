/* Get Programming with JavaScript
 * Listing 5.04
 * Calling the same function with different arguments
 */

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");



/* Further Adventures
 *
 * 1) Change the value assigned to message
 *    and run the program.
 *
 * 2) Add a couple more calls to showMessage
 *    with different arguments.
 *
 * 3) Change the extra text added
 *    in the showMessage function.
 *
 */
