# Functions

### Displaying an object’s properties on the console
[jsbin: Listing 4.01](http://jsbin.com/besudi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.01
 * Displaying an object's properties on the console
 */

var player1 = {
  name: "Kandra",
  location: "The Old Library",
  health: 50
};

console.log("Player information for " + player1.nam);
console.log("------------------------------");
console.log(player1.name + " is in " + player1.location);
console.log(player1.name + " has health " + player1.health);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second player and display the same info for them
 *
 * 2) Create an object to represent a blog post
 *
 * 3) Write code to display info about the blog post
 *
 * 4) What happens if you try to display a property that doesn't exist?
 *    e.g. player1.nam
 *
 */
```

### Displaying information from similar objects
[jsbin: Listing 4.02](http://jsbin.com/gewegi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.02
 * Displaying information from similar objects
 */

var player1 = {
  name: "Kandra",
  location: "The Old Library",
  health: 50
};

var player2 = {
  name: "Dax",
  location: "The Dungeon of Doom",
  health: 40
};

var player3 = {
  name: "Blinky",
  location: "The Maze",
  health: 2000
};

console.log("Player information for " + player1.name);
console.log("------------------------------");
console.log(player1.name + " is in " + player1.location);
console.log(player1.name + " has health " + player1.health);
console.log("------------------------------");

console.log("Player information for " + player2.name);
console.log("------------------------------");
console.log(player2.name + " is in " + player2.location);
console.log(player2.name + " has health " + player2.health);
console.log("------------------------------");

console.log("Player information for " + player3.name);
console.log("------------------------------");
console.log(player3.name + " is in " + player3.location);
console.log(player3.name + " has health " + player3.health);
console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a fourth player and display their info
 *
 * 2) All the player info is in one big block on the console. Change the code to space out the different players
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */
```

### A simple function definition and assignment
[jsbin: Listing 4.03](http://jsbin.com/tehixo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.03
 * A simple function definition and assignment
 */

var sayHello = function () {
	console.log("Hello World!");
};

sayHello();



/* Further Adventures
 *
 * 1) Add a second sayHello(); on a new line. Run the program
 *
 * 2) Change the message from the sayHello function
 *
 * 3) Create a sayGoodbye function
 *
 * 4) Make the program say goodbye ten times
 *
 */
```

### Calling the sayHello function three times
[jsbin: Listing 4.04](http://jsbin.com/vozuxa/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.04
 * Calling the sayHello function three times
 */

var sayHello = function () {
	console.log("Hello World!");
};

sayHello();
sayHello();
sayHello();



/* Further Adventures
 *
 * 1) Change the message from the sayHello function
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines
 *
 * 3) Create a function that prints the letters of "Hello World!" one by one down the page
 */
```

### Using a function to display object properties
[jsbin: Listing 4.05](http://jsbin.com/toqopo/2/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.05
 * Using a function to display object properties
 */

var showPlayerInfo = function () {
  console.log("Player information for " + player.name);
  console.log("------------------------------");
  console.log(player.name + " is in " + player.location);
  console.log(player.name + " has health " + player.health);
  console.log("------------------------------");
};



/* Further Adventures
 *
 * 1) Add a call to showPlayerInfo and run the program. What happens?
 *
 * 2) Declare a player variable but don't assign it a value. Run the program. What happens now?
 *
 * 3) Create an empty object and assign it to the player variable. Run the program again. Does the output change?
 *
 * 4) Add name, location and health properties to the player object. Run one more time. Is the output as expected?
 *
 */
```

### Calling the showPlayerInfo function
[jsbin: Listing 4.06](http://jsbin.com/menebu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.06
 * Calling the showPlayerInfo function
 */

var player1 = {
	name: "Kandra",
	location: "The Old Library",
	health: 50
};

var showPlayerInfo = function () {
  console.log("Player information for " + player.name);
  console.log("------------------------------");
  console.log(player.name + " is in " + player.location);
  console.log(player.name + " has health " + player.health);
  console.log("------------------------------");
};

var player = player1;

showPlayerInfo();



/* Further Adventures
 *
 * 1) Without creating a player2, assign player2 to the player variable. What happens when you call showPlayerInfo?
 *
 * 2) Create an empty object and assign it to a player2 variable. What happens when you call showPlayerInfo now?
 *
 * 3) Fill out player2 with the properties needed by showPlayerInfo. What happens when you call showPlayerInfo now?
 *
 */
```

### Using the same function with multiple objects
[jsbin: Listing 4.07](http://jsbin.com/mavutu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.07
 * Using the same function with multiple objects
 */

var player1 = {
  name: "Kandra",
  location: "The Old Library",
  health: 50
};

var player2 = {
  name: "Dax",
  location: "The Dungeon of Doom",
  health: 40
};

var player3 = {
  name: "Blinky",
  location: "The Maze",
  health: 2000
};

var player;

var showPlayerInfo = function () {
  console.log("Player information for " + player.name);
  console.log("------------------------------");
  console.log(player.name + " is in " + player.location);
  console.log(player.name + " has health " + player.health);
  console.log("------------------------------");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

player = player3;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Create an object to represent a multiple choice quiz question
 *
 * 2) Create two more quiz question objects
 *
 * 3) Create a function to show the question and answer options
 *
 * 4) Use the same variable assignment technique as above to display all three questions on the console
 *
 */
```


### Updating our display function to add a blank line
[jsbin: Listing 4.08](http://jsbin.com/cijini/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.08
 * Updating our display function to add a blank line
 */

var player1 = {
  name: "Kandra",
  location: "The Old Library",
  health: 50
};

var player2 = {
  name: "Dax",
  location: "The Dungeon of Doom",
  health: 40
};

var player3 = {
  name: "Blinky",
  location: "The Maze",
  health: 2000
};

var player;

var showPlayerInfo = function () {
  console.log("Player information for " + player.name);
  console.log("------------------------------");
  console.log(player.name + " is in " + player.location);
  console.log(player.name + " has health " + player.health);
  console.log("------------------------------");
  console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

player = player3;
showPlayerInfo();



/* Further Adventures
 *
 * 1) Create three objects to represent blog posts
 *
 * 2) Create a function to display the posts on the console
 *
 * 3) Can you find your own way of visually separating the different blog posts on the console?
 *
 */
```


### Relying on a variable outside of the function
[jsbin: Listing 4.09](http://jsbin.com/taqusi/edit?js,console)
```javascript
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
```


### Passing information to a function
[jsBin Listing 4.10] (http://jsbin.com/xucemu/edit?js,console)
```javascript
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
```


### Calling the same function with different arguments
[jsBin Listing 4.11] (http://jsbin.com/zavavo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.11
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
[jsBin Listing 4.12] (http://jsbin.com/siyelu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.12
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
[jsBin Listing 4.13] (http://jsbin.com/yotimic/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.13
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


### Returning the sum of two numbers
[jsBin Listing 4.14] (http://jsbin.com/haqapu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.14
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
 *    [Hint: You can nest calls to sum]
 *
 * 4) Create a function to find the sum of three numbers given as arguments
 *
 */
```


### A function with three arguments
[jsBin Listing 4.15] (http://jsbin.com/jedigi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.15
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
