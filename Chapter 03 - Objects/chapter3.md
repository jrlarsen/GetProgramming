# Functions

### Using variables to represent a single player
[jsbin: Listing 3.01](http://jsbin.com/fucuxah/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.01
 * Using variables to represent a single player
 */

var playerName = "Kandra";
var playerHealth = 50;
var playerLocation = "The Old Library";

console.log(playerName + " is in " + playerLocation);
console.log(playerName + " has health " + playerHealth);



/* Further Adventures
 *
 * 1) Declare variables for a second player
 *    and assign them values.
 *
 * 2) Add code to log their details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third player.
 *
 * 4) Consider the code needed for 10 players.
 *    For 100 players.
 *
 */
```


### Using prefixes to tell player variables apart
[jsbin: Listing 3.02](http://jsbin.com/qowagi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.02
 * Using prefixes to tell player variables apart
 */

var player1Name = "Kandra";
var player1Health = 50;
var player1Location = "The Old Library";

var player2Name = "Dax";
var player2Health = 40;
var player2Location = "The Dungeon of Doom";

var player3Name = "Blinky";
var player3Health = 2000;
var player3Location = "The Maze";

console.log("There are three players so far...");
console.log(player1Name + ", " + player2Name + " and " + player3Name);



/* Further Adventures
 *
 * 1) Add a fourth player.
 *
 * 2) Update the messages to include the new player.
 *
 */
```


### A player as an object
[jsbin: Listing 3.03](http://jsbin.com/ruruko/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.03
 * A player as an object
 */

var player1 = {
	name : "Kandra",
	health : 50,
	location : "The Old Library"
};

console.log(player1);



/* Further Adventures
 *
 * 1) Change the location of player1.
 *    Run the program again.
 *
 * 2) Try creating a player2 object.
 *
 * 3) Log player2 to the console.
 *
 */
```


### Creating an empty object
[jsbin: Listing 3.04](http://jsbin.com/kaqatu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.04
 * Creating an empty object
 */

var player1 = {};



/* Further Adventures
 *
 * 1) Log player1 to the console.
 *
 * 2) Place your cursor between the curly braces
 *    in the code above and press enter.
 *    jsBin should add an empty line between
 *    the braces. You can add more empty lines.
 *
 * 3) Run the program again, logging player1
 *    to the console.
 *    The extra lines should make no difference
 *    to the outcome.
 *
 */
```


### An object with a single property
[jsbin: Listing 3.05](http://jsbin.com/robupi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.05
 * An object with a single property
 */

var player1 = { name : "Kandra" };



/* Further Adventures
 *
 * 1) Log player1 to the console.
 *
 * 2) Create a second player.
 *
 * 3) Log player2 to the console.
 *
 * 4) In the console tab, click after the blue arrow.
 *    Type 'player1' and press Enter.
 *    The player1 object should be displayed.
 *
 */
```


### Using line breaks to aid readability
[jsbin: Listing 3.06](http://jsbin.com/bafige/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.06
 * Using line breaks to aid readability
 */

var player1 = {
	name : "Kandra"
};



/* Further Adventures
 *
 * 1) Create a second player.
 *
 * 2) Try adding new properties to each player.
 *    If error messages appear, see if you can make
 *    sense of them. Do they help you to
 *    fix the problem?
 *
 */
```


### Objects with multiple properties
[jsbin: Listing 3.07](http://jsbin.com/bawiqev/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.07
 * Objects with multiple properties
 */

var player1 = { name : "Kandra"  ,  health : 50 };

var player2 = {
	name : "Dax",
	health : 40
};



/* Further Adventures
 *
 * 1) Add a third property to each player.
 *    Don't forget the commas.
 *
 * The linear format for player1 is okay for
 * objects with few properties but becomes
 * unwieldy as more properties are added.
 *
 * 2) Add spaces to player2 properties so that
 *    the colons line up.
 *    Do you prefer the objects formatted that way?
 *
 * 3) Reformat player1 so that it has the same
 *    layout as player2.
 *
 */
```


### 
[jsbin: Listing 3.08]()
```javascript

```


### 
[jsbin: Listing 3.09]()
```javascript

```


### 
[jsbin: Listing 3.10]()
```javascript

```


### 
[jsbin: Listing 3.11]()
```javascript

```


### 
[jsbin: Listing 3.12]()
```javascript

```


### 
[jsbin: Listing 3.13]()
```javascript

```


### 
[jsbin: Listing 3.14]()
```javascript

```


### 
[jsbin: Listing 3.15]()
```javascript

```


