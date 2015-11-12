# Chapter 05 - Arguments: passing data to functions


### Relying on a variable outside of the function
[jsbin: Listing 5.01](http://jsbin.com/taqusi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.01
 * Relying on a variable outside of the function
 */

var message;
var showMessage;

message = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Change the message and run the program.
 *
 * 2) Change the variable name in the
 *    parentheses for console.log.
 *    e.g. console.log(msg);
 *
 * 3) Run the program
 *
 * The showMessage function relies on
 * the variable name it uses with
 * console.log matching one that exists
 * outside of the function body.
 *
 */
```


### Breaking a function by changing a variable name
[jsbin: Listing 5.02](http://jsbin.com/yaresa/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.02
 * Breaking a function by changing a variable name
 */

var msg;
var showMessage;

msg = "It's full of stars!";

showMessage = function () {
	console.log(message);
};

showMessage();



/* Further Adventures
 *
 * 1) Update the console.log so the program works.
 *
 * 2) Declare another message variable
 *    and assign it a value.
 *
 * 3) Display the new message as well as the old one.
 *
 * 4) Display a single message created by joining
 *    the two strings.
 *
 */
```


### Passing information to a function
[jsbin: Listing 5.03](http://jsbin.com/xucemu/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.03
 * Passing information to a function
 */

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");



/* Further Adventures
 *
 * 1) Change the message in the brackets
 *    when showMessage is called on line 12.
 *
 * The value in the brackets when showMessage is called
 * is an argument. "It's full of stars!" was the
 * original argument on line 12.
 *
 * 2) Add two more calls to the showMessage function
 *    with different arguments each time.
 *
 * 3) Change the showMessage function itself.
 *    Make it add some extra text after the
 *    message passed in.
 *
 */
```


### Calling the same function with different arguments
[jsbin: Listing 5.04](http://jsbin.com/zavavo/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.04
 * Calling the same function with different arguments
 */

var showMessage;

showMessage = function (message) {
	console.log("The message is: " + message);
};

showMessage("It's full of stars!");
showMessage("Hello to Jason Isaacs");
showMessage("Hello to Jason Isaacs and Stephen Fry");



/* Further Adventures
 *
 * 1) Change the value assigned to message
 *    and run the program.
 *
 * 2) Add a couple more calls to showMessage
 *    with different arguments.
 *
 * 3) Change the extra text added
 *    in the showMessage function.
 *
 */
```


### Using the square function
[jsbin: Listing 5.05](http://jsbin.com/vequpi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.05
 * Using the square function
 */

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);



/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */
```


### A function with two arguments
[jsbin: Listing 5.06](http://jsbin.com/siyelu/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.06
 * A function with two arguments
 */

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);



/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */
```


### Displaying a player's name
[jsbin: Listing 5.07](http://jsbin.com/yubahi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.07
 * Displaying a player's name
 */

var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerName("Kandra");
showPlayerName("Dax");



/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */
```


### Displaying a player's name via an object property
[jsbin: Listing 5.08](http://jsbin.com/juhewi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.08
 * Displaying a player's name via an object property
 */

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name);
showPlayerName(player2.name);



/* Further Adventures
 *
 * 1) In the showPlayerName function,
 *    change playerName to playerName.toUpperCase().
 *    Run the function.
 *
 * 2) Change the function to show the player's
 *    name in lower case.
 *
 */
```


### Displaying a player's health
[jsbin: Listing 5.09](http://jsbin.com/nomija/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.09
 * Displaying a player's health
 */

var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);



/* Further Adventures
 *
 * 1) Change the showPlayerHealth function
 *    so it shows information of the form:
 *    Kandra: health 50.
 *
 * 2) Call the showPlayerHealth function
 *    using your own arguments.
 *
 * 3) Declare a variable called healthInfo
 *    inside the showPlayerHealth function.
 *
 *    var healthInfo;
 *
 * 4) Assign healthInfo the string that
 *    will be displayed.
 *
 *    healthInfo = playerName + ": health " + playerHealth;
 *
 * 5) Change the call to console.log so that
 *    it uses the healthInfo variable.
 *
 */
```


### Displaying a player's health via object properties
[jsbin: Listing 5.10](http://jsbin.com/zufoxi/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.10
 * Displaying a player's health via object properties
 */

var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerHealth(player1.name, player1.health);
showPlayerHealth(player2.name, player2.health);



/* Further Adventures
 *
 * 1) Add a new property to the player objects
 *    called healthMultiplier.
 *
 * 2) Add a third parameter to the definition
 *    of the showPlayerHealth function
 *    called playerHealthMultiplier
 *
 * 3) Update the function so that the health
 *    displayed is first multiplied by
 *    the health multiplier.
 *
 * 4) Add the player's healthMultiplier property
 *    as a third argument to the two calls
 *    to the showPlayerHealth function.
 *
 */
```


### Displaying a player's location
[jsbin: Listing 5.11](http://jsbin.com/yifahe/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.11
 * Displaying a player's location
 */

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library");



/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */
```


### Displaying a player's location via object properties
[jsbin: Listing 5.12](http://jsbin.com/mejuki/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.12
 * Displaying a player's location via object properties
 */

var player1;
var player2;
var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerPlace(player1.name, player1.place);
showPlayerPlace(player2.name, player2.place);



/* Further Adventures
 *
 * 1) In the console.log brackets, change
 *    playerName to playerName.substring(0, 1)
 *    Run the program. What do you think
 *    the substring function does?
 *
 * 2) Change the arguments to the substring
 *    function to (0, 2), then (0, 3) and so on.
 *
 * 3) Change the arguments to
 *    (1, 2), then (1, 3) and so on.
 *
 * 4) What role do you think the two arguments
 *    to the substring function have?
 *
 */
```


### Displaying a player's information
[jsbin: Listing 5.13](http://jsbin.com/likafe/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.13
 * Displaying a player's information
 */

var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");

    showPlayerName(playerName);

    console.log("----------------------------");

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    console.log("----------------------------");
    console.log("");
};

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);



/* Further Adventures
 *
 * 1) Create a function called showLine
 *    that logs a line of dashes to the console.
 *    ----------------------------
 *
 * 2) Update the showPlayerInfo function to
 *    use the showLine function rather than
 *    logging dashes to the console directly.
 *
 * 3) Create and use a showBlankLine function
 *    for logging a blank line to the console.
 *
 */
```


### Displaying a player's information using properties
[jsbin: Listing 5.14](http://jsbin.com/loteti/edit?js,console)
```javascript
/* Get Programming with JavaScript
 * Listing 5.14
 * Displaying a player's information using properties
 */

var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");

    showPlayerName(playerName);

    console.log("----------------------------");

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    console.log("----------------------------");
    console.log("");
};

var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);




/* Further Adventures
 *
 * 1) Define a showLine function with a parameter
 *    for the length of line.
 *    e.g. showLine(5) should output
 *    -----
 *    showLine(20) should output
 *    --------------------
 *
 *    Hints:
 *    a) In the function body declare a line variable
 *       and assign it a long string of dashes.
 *    b) Use the substring function to grab
 *       a line of the correct length.
 *       line.substring(0, 10) would have length 10.
 *
 * 2) Use your showLine function to display the
 *    player's name in a box.
 *    ----------
 *    - Kandra -
 *    __________
 *
 * 3) Update your showLine function to use
 *    asterisks rather than dashes.
 *    **********
 *    * Kandra *
 *    **********
 *
 */
```
