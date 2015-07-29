# Chapter 05 - Passing data to and from functions


### Relying on a variable outside of the function
[jsbin: Listing 5.01](http://jsbin.com/taqusi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.01
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
```


### Breaking a function by changing a variable name
[jsBin Listing 5.02] (http://jsbin.com/yaresa/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.02
 * Breaking a function by changing a variable name
 */

var msg = "Hello World!";

var showMessage = function () {
	console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Update the console.log argument so the program works
 *
 * 2) Declare another message variable and assign it a value
 *
 * 3) Display the new message as well as the old one
 *
 * 4) Display a single message created by joining the two strings
 *
 */
```


### Passing information to a function
[jsBin Listing 5.03] (http://jsbin.com/xucemu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.03
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
```


### Calling the same function with different arguments
[jsBin Listing 5.04] (http://jsbin.com/zavavo/edit?js,console)
```javascript
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
```


### A function with two arguments
[jsBin Listing 5.05] (http://jsbin.com/siyelu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.05
 * A function with two arguments
 */

var showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74
 *
 * 2) Create a showProduct function to multiply two numbers
 *
 * 3) Use your function to multiply three pairs of numbers
 *
 * 4) What about showDifference and showQuotient for subtraction and division?
 *
 */
```


### Passing an object as an argument to a function
[jsBin Listing 5.06] (http://jsbin.com/yotimic/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.06
 * Passing an object as an argument to a function
 */

var player1 = {
  name: "Kandra",
  location: "The Old Library",
  health: 50
};

var showPlayerInfo = function (player) {
console.log("Player information for " + player.name);
console.log("------------------------------");
console.log(player.name + " is in " + player.location);
console.log(player.name + " has health " + player.health);
console.log("------------------------------");
console.log("");
};

showPlayerInfo(player1);



/* Further Adventures
 *
 * 1) Create a second player object
 *
 * 2) Add a second call to showPlayerInfo so both players' info is displayed
 *
 * 3) Create an object to represent a book with at least author and title properties
 *
 * 4) Create a function to display the details of a book object passed to the function
 *
 */
```


### A function that adds properties to an object
[jsBin Listing 5.07] (http://jsbin.com/qevodu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.07
 * A function that adds properties to an object
 */

var sale1 = { price: 14, rate: 15 };

var calculateTax = function (sale) {
	sale.tax = sale.price * sale.rate / 100;
	sale.total = sale.price + sale.tax;
};

var displaySale = function (sale) { 
  console.log("price = $" + sale.price.toFixed(2));
  console.log("tax @ " + sale.rate + "% = $" + sale.tax.toFixed(2));
  console.log("total cost = $" + sale.total.toFixed(2));
};

calculateTax(sale1);
displaySale(sale1);



/* Further Adventures
 *
 * 1) Change the rate property of the sale1 object and run the program
 *
 * 2) Add a second sale object, sale2
 *
 * 3) Add calls to calculateTax and displaySale to display sale info for sale2
 *
 * 4) Can you find a way to combine the calls to calculateTax and displaySale ?
 *
 */
```


### Returning the sum of two numbers
[jsBin Listing 5.08] (http://jsbin.com/haqapu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.08
 * Returning the sum of two numbers
 */

var sum = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var result = sum(10, 35);

console.log(result);



/* Further Adventures
 *
 * 1) Find and display the sum of a different pair of numbers
 *
 * 2) Change the call to console.log so that the display on the console reads: 'The sum of 10 and 35 is 45' using the sum function to generate the answer
 *
 * 3) Can you use the sum function as it is to add more than two numbers?
 *    Hint: You can nest calls to sum
 *
 * 4) Create a function to find the sum of three numbers given as arguments
 *
 */
```


### A function with three arguments
[jsBin Listing 5.09] (http://jsbin.com/jedigi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 5.09
 * A function with three arguments
 */

var totalCost = function (callOutCharge, costPerHour, numberOfHours) {
	return callOutCharge + costPerHour * numberOfHours;
};

console.log("$" + totalCost(30, 40, 3));



/* Further Adventures
 *
 * 1) What is the cost for 12 hours work?
 *
 * 2) The plumber sometimes issues discount coupons. Add a fourth parameter to the totalCost function definition to account for discounts
 *
 * 3) Update the function to subtract the discount from the total before returning it
 *
 * 4) If a customer has a $20 off coupon, update line 10 to display the total cost. [It should now be $130]
 *
 */
```
