/* Adventures in JavaScript
 * Listing 4.10
 * Passing information to a function
 */

var showMessage = function (message) {
    console.log("The message is: " + message);
};

showMessage("Hello World!");



/* Further Adventures
 *
 * 1) Change the message in the brackets when showMessage is called on line 10
 *
 * The value in the brackets when showMessage is run is called an argument. "Hello World!" was the original argument on line 10
 *
 * 2) Add two more calls to the showMessage function with different arguments each time
 *
 * 3) Change the showMessage function itself. Make it add some extra text after the message passed in
 *
 */