/* Get Programming with JavaScript
 * Listing 6.04
 * Returning the sum of two numbers
 */

var sum;

sum = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var result = sum(10, 35);

console.log(result);



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 10 and 35 is 45'
 *    using the sum function to generate the answer.
 *
 * 3) Can you use the sum function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to sum.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */
