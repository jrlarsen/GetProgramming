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


### Using dot notation to access property values
[jsbin: Listing 3.08](http://jsbin.com/funiyu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.08
 * Using dot notation to access property values
 */

var player1 = {
  name : "Kandra",
	location : "The Old Library",
	health : 50
};

console.log(player1.name);
console.log(player1.location);



/* Further Adventures
 *
 * 1) Log the health property to the console.
 *
 * 2) Add a second player.
 *
 * 3) Log their details to the console.
 *
 * 4) In the console tab, click just after the blue arrow.
 *    Type in player1.name and press Enter.
 *    Once the program is run, object properties
 *    are available interactively via the console.
 *
 */
```


### Concatenating string properties
[jsbin: Listing 3.09](http://jsbin.com/yoweti/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.09
 * Concatenating string properties
 */

var player1 = {
	name: "Kandra",
	location: "The Old Library"
};

var player2 = {
	name: "Dax",
	location: "The Dungeon of Doom"
};

console.log(player1.name + " is in " + player1.location);
console.log(player2.name + " is in " + player2.location);



/* Further Adventures
 *
 * 1) Add a third player.
 *
 * 2) Log their details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */
```


### Using dot notation to update a property
[jsbin: Listing 3.10](http://jsbin.com/mulimi/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.10
 * Using dot notation to update a property
 */

var player1 = {
	name: "Kandra",
	location: "The Old Library"
};

player1.location = "The Docks";
player1.health = 50;



/* Further Adventures
 *
 * 1) Run the program.
 *
 * 2) In the console tab, click to the right
 *    of the blue arrow.
 *
 * 3) Change the value of the location property
 *    by typing player1.location = "The ISS";
 *    and pressing Enter.
 *
 * 4) Update other properties using the console.
 *
 */
```


### Using a property in a calculation
[jsbin: Listing 3.11](http://jsbin.com/cuboko/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.11
 * Using a property in a calculation
 */

var player1 = {
	name: "Kandra",
	health: 50
};

console.log(player1.name + " has health " + player1.health);

player1.health = player1.health + 10;

console.log(player1.name + " has health " + player1.health);



/* Further Adventures
 *
 * 1) Write code to increase player1's health by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their health scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */
```


### A blog post
[jsbin: Listing 3.12](http://jsbin.com/jiculu/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.12
 * A blog post
 */

var post = {
	id : 1,
	title : "My Crazy Space Adventure",
	author : "Philae",
	created : "2015-06-21",
	approved : true,
	body : "You will not believe where I just woke up!! Only on a comet..."
};



/* Further Adventures
 *
 * 1) Display some of the properties.
 *
 * 2) Add a second post.
 *
 * We'd like to be able to display posts only if
 * the approved property is true.
 *
 */
```


### A calendar event
[jsbin: Listing 3.13](http://jsbin.com/viroho/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.13
 * A calendar event
 */

var event = {
	title : "Appraisal Meeting",
	startDate : "2016-10-04 16:00:00",
	endDate : "2016-10-04 17:00:00",
	location : "Martha's office",
	importance: 1,
	notes : 'Don\'t forget the portfolio!'
};



/* Further Adventures
 *
 * 1) Remove the backslash from the notes property.
 *
 * 2) Take a look at the errors reported by jsBin.
 *
 * 3) Put the backslash back.
 *
 * 4) See how the location property doesn't need
 *    a backslash. What happens if you add one and
 *    log the location property?
 *
 * 5) What if you want to show a backslash
 *    as part of a string?
 *
 */
```


### Location for a weather app
[jsbin: Listing 3.14](http://jsbin.com/diguhe/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.14
 * Location for a weather app
 */

var location = {
  "city"      : "San Francisco",
  "state"     : "CA",
  "country"   : "US",
  "zip"       : "94101",
  "latitude"  : 37.775,
  "longitude" : -122.418,
  "elevation" : 47.000
};



/* Further Adventures
 *
 * 1) Run the program
 *
 * 2) In the console tab, click after the blue arrow.
 *    Type location.city followed by Enter
 *    to show the city property.
 *
 * Hmmmm, something's not right!
 *
 * 3) Type location and press Enter
 *    to display the whole location object.
 *
 * Okay, that's definitely not our location object.
 *
 * This is an example of a variable collision.
 * Browsers (and jsBin) are programs themselves and
 * create their own variables.
 * Other code, not ours, has declared its own
 * location variable, over-writing ours.
 *
 * 4) Change our location variable, now calling
 *    it geolocation.
 *    Repeat steps 1, 2 and 3, using geolocation
 *    instead of location.
 *
 */
```


### A question and answer for a quiz app
[jsbin: Listing 3.15](http://jsbin.com/damoto/edit?js,console)
```javascript
/* Adventures in JavaScript
 * Listing 3.15
 * A question and answer for a quiz app
 */

var questionAndAnswer = {
	question: "What is the capital of France?",
	answer1: "Bordeaux",
	answer2: "F",
	answer3: "Paris",
	answer4: "Brussels",
	correctAnswer: "Paris",
	marksForQuestion: 2
};



/* Further Adventures
 *
 * 1) Use console.log to present the question
 *    and answer options in a nicely formatted way.
 *
 */
```