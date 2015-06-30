/* Adventures in JavaScript
 * Listing 5.04
 * Calling the same function with different arguments
 */

var showMessage = function (message) {
    console.log("The message is: " + message);
};

var myMessage = "Hello to Jason Isaacs";

showMessage("Hello World!");
showMessage(myMessage);
showMessage(myMessage + " and Stephen Fry");



/* Further Adventures
 *
 * 1) Change the value assigned to myMessage and run the program
 *
 * 2) Add a couple more calls to showMessage with different arguments
 *
 * 3) Change the extra text added in the showMessage function
 *
 */