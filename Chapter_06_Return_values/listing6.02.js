/* Get Programming with JavaScript
 * Listing 6.02
 * Using an argument to determine the return value
 */

var getHelloTo;
var fullMessage;

getHelloTo = function (name) {
    return "Hello to " + name;
};

fullMessage = getHelloTo("Kandra");

console.log(fullMessage);



/* Further Adventures
 *
 * 1) Change the definition of getHelloTo
 *    to accept two parameters, name1 and name2.
 *
 * 2) Make the function return a string of
 *    the form "Hello to Kandra and Dax"
 *
 */
