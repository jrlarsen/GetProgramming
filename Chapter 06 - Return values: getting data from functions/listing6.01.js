/* Adventures in JavaScript
 * Listing 6.01
 * Returning a value from a function
 */

var getMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

response = getMessage();

console.log(response);



/* Further Adventures
 *
 * 1) Write a getMyMessage function
 *    that returns a message of
 *    your choosing.
 *
 * 2) Write a getLength function
 *    that returns the length of
 *    a string passed in as an argument.
 *    e.g. it should report
 *    "There and back again" has length 20
 *
 */