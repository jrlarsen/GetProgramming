/* Adventures in JavaScript
 * Listing 8.04
 * Using a variable as an index
 */

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;

console.log( days[dayInWeek] );
console.log( days[dayInWeek - 1] );



/* Further Adventures
 *
 * 1) Change the value of the dayInWeek variable
 *    to display a different day.
 *
 * 2) Write a function that accepts a number for the
 *    day of the week to be displayed and returns
 *    the day as a string. Assign the function to
 *    a getDay variable.
 *
 * 3) Call your function, passing it 4 as the day
 *    of the week, and log the value it returns.
 *
 */