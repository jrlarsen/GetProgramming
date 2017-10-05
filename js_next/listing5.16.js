/* Get Programming with JavaScript
 * Listing 5.16
 * Defining a function with a default argument
 */

const showMessage = (message = "Hello World!") => {
    console.log(`The message is: ${message}`);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage();



/* Further Adventures
 *
 * 1) Add a second parameter to the function
 *    called prefix.
 *
 * 2) Change the template string to log the
 *    prefix followed by the message.
 *
 * 3) Include a default value for the prefix.
 *
 */