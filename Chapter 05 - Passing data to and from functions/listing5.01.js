/* Adventures in JavaScript
 * Listing 4.09
 * Relying on a variable outside of the function
 */

var message = "Hello World!";

var showMessage = function () {
    console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Change the message and run the program
 *
 * 2) Only declare the message variable on line 6, don't assign it a value: 'var message;' What happens when you run the program?
 *
 * 3) Delete line 6 so no message variable is declared. What happens when you run the program now?
 *
 */