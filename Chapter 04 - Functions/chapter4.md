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

console.log("Player information for " + player1.name);
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

### Adding tax to find the total cost
[jsbin: Listing 4.03](http://jsbin.com/kawocu/2/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.03
 * Adding tax to find the total cost
 */

var sale1 = { price: 14, rate: 15 };
var sale2 = { price: 40, rate: 10 };
var sale3 = { price: 120, rate: 20 };

sale1.tax = sale1.price * sale1.rate / 100;
sale2.tax = sale2.price * sale2.rate / 100;
sale3.tax = sale3.price * sale3.rate / 100;

sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;

console.log("price = $" + sale1.price.toFixed(2));
console.log("tax @ " + sale1.rate + "% = $" + sale1.tax.toFixed(2));
console.log("total cost = $" + sale1.total.toFixed(2));

console.log("price = $" + sale2.price.toFixed(2));
console.log("tax @ " + sale2.rate + "% = $" + sale2.tax.toFixed(2));
console.log("total cost = $" + sale2.total.toFixed(2));

console.log("price = $" + sale3.price.toFixed(2));
console.log("tax @ " + sale3.rate + "% = $" + sale3.tax.toFixed(2));
console.log("total cost = $" + sale3.total.toFixed(2));



/* Further Adventures
 *
 * 1) Add a fourth sale object
 *
 * 2) Add lines to calculate the tax and total for the new object
 *
 * 3) Display the sale info for the fourth object
 *
 * 4) Alter the call to .toFixed to show values to the nearest dollar
 *
 */
```


### A simple function definition and assignment
[jsbin: Listing 4.04](http://jsbin.com/tehixo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.04
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


### Two more function definitions and assignments
[jsbin: Listing 4.05](http://jsbin.com/xezani/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.05
 * Two more function definitions and assignments
 */

var findTotal = function () {
	result = number1 + number2;
};

var displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};



/* Further Adventures
 *
 * 1) Declare number1, number2 and result variables
 *
 * 2) Assign values to the variables
 *
 * 3) Call the findTotal function
 *
 * 4) Display the result on the console
 *
 * 5) call the displayMenu function
 *
 */
```


### Calling the sayHello function three times
[jsbin: Listing 4.06](http://jsbin.com/vozuxa/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.06
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


### Using the findTotal function to display a calculation
[jsbin: Listing 4.07](http://jsbin.com/hefuwa/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.07
 * Using the findTotal function to display a calculation
 */

var number1 = 1000;
var number2 = 66;
var result;

var findTotal = function () {
	result = number1 + number2;
};

findTotal();

console.log(number1 + " + " + number2 + " = " + result);



/* Further Adventures
 *
 * 1) Change number1 and number2 and run the program
 *
 * 2) Add a third variable, number3, and assign it a value
 *
 * 3) Update the findTotal function to add the three numbers
 *
 * 4) Update the console.log line to show the new calculation
 *
 */
```


### Displaying a menu
[jsbin: Listing 4.08](http://jsbin.com/cujozo/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.08
 * Displaying a menu
 */

var displayMenu = function () {
	console.log("Please choose an option:");
	console.log("(1) Print log");
	console.log("(2) Upload file");
	console.log("(9) Quit");
};

displayMenu();



/* Further Adventures
 *
 * 1) Add two more options to the displayMenu function and run the program
 *
 * 2) Create your own displayMyMenu function
 *
 * 3) Add a line to call your function as well. Run the program
 *
 */
```


### Using a function to display object properties
[jsbin: Listing 4.09](http://jsbin.com/toqopo/2/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.09
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
[jsbin: Listing 4.10](http://jsbin.com/menebu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.10
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
[jsbin: Listing 4.11](http://jsbin.com/mavutu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.11
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


### Using functions to add and display tax
[jsbin: Listing 4.12](http://jsbin.com/raqiri/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.12
 * Using functions to add and display tax
 */

var sale1 = { price: 14, rate: 15 };
var sale2 = { price: 40, rate: 10 };
var sale3 = { price: 120, rate: 20 };

var sale;

var calculateTax = function () {
	sale.tax = sale.price * sale.rate / 100;
	sale.total = sale.price + sale.tax;
};

var displaySale = function () { 
  console.log("price = $" + sale.price.toFixed(2));
  console.log("tax @ " + sale.rate + "% = $" + sale.tax.toFixed(2));
  console.log("total cost = $" + sale.total.toFixed(2));
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();



/* Further Adventures
 *
 * 1) Add a fourth sale object
 *
 * 2) Update the code so that tax is calculated and the sale is displayed
 *
 * Having two separate functions to calculate tax and display sales is good, each has a specific purpose. Having to call both functions for each sale object is not so good.
 *
 * 3) Can you change the code so that you don't have to call both functions for every sale?
 *
 */
```


### Updating our display function to add a blank line
[jsbin: Listing 4.13](http://jsbin.com/cijini/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 4.13
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