/* Adventures in JavaScript
 * Listing 8.03
 * Accessing array elements
 */

var scores = [ 3, 1, 8, 2 ];

console.log("There are " + scores.length + " scores:");
console.log("The first score is " + scores[0]);
console.log("The second score is " + scores[1]);
console.log("The third score is " + scores[2]);
console.log("The fourth score is " + scores[3]);



/* Further Adventures
 *
 * 1) Add a fifth score to the array.
 *
 * 2) Add an extra console.log to display the new score.
 *
 * The index of the last element is one less than
 * the length of the array.
 *
 * 3) Log the value of the last element to the console.
 *    Start the message with "The last score is " and
 *    concatenate the score to the string.
 *    Use an expression involving scores.length
 *    as the index for the last element.
 *
 * 4) Add an extra score to the array and 
 *    run the program again.
 *
 */